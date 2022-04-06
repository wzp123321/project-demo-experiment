<template>
  <div class="pdf-view">
    <div id="viewerContainer" ref="container">
      <div id="viewer" class="pdfViewer" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";

import getPdfjsDist from "../plugins/vue-pdf";
export default defineComponent({
  name: "Pdf",
  props: {
    url: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "canvas",
    },
    pdfjsDistPath: {
      type: String,
      default: ".",
    },
  },
  setup(props) {
    const pdfViewer = ref<any>(null);
    const pdfLinkService = ref<any>(null);
    const currentScale = ref<any>("page-width");
    const loadingTask = ref<any>(null);
    const CMAP_URL = ref<any>();
    const containerRef = ref();

    const onPagesInit = ({ source }: any) => {
      source.currentScaleValue = currentScale.value;
    };
    const pdfLibInit = async () => {
      let pdfjsLib = (window as any).pdfjsLib;
      console.log(pdfjsLib);
      let pdfjsViewer = (window as any).pdfjsViewer;
      if (!pdfjsLib || !pdfjsViewer) {
        try {
          await getPdfjsDist(props.pdfjsDistPath);
          CMAP_URL.value = `${props.pdfjsDistPath}/pdf/cmaps/`;
          console.log(CMAP_URL.value);
          pdfjsLib = (window as any).pdfjsLib;
          pdfjsLib.GlobalWorkerOptions.workerSrc = `${props.pdfjsDistPath}/pdf/build/pdf.worker.js`;
          pdfjsViewer = (window as any).pdfjsViewer;
        } catch (error) {
          // console.log(error)
          // pdfjs文件获取失败
          return;
        }
      }

      const container = containerRef.value;
      const eventBus = new pdfjsViewer.EventBus();

      // (Optionally) enable hyperlinks within PDF files.
      const pdfLinkService = new pdfjsViewer.PDFLinkService({
        eventBus: eventBus,
      });
      pdfLinkService.value = pdfLinkService;
      const pdfViewer = new pdfjsViewer.PDFViewer({
        container: container,
        eventBus: eventBus,
        linkService: pdfLinkService,
        renderer: props.type,
        textLayerMode: 0,
        downloadManager: new pdfjsViewer.DownloadManager({}),
        enableWebGL: true,
      });
      pdfViewer.value = pdfViewer;
      pdfLinkService.setViewer(pdfViewer);

      eventBus.on("pagesinit", onPagesInit);
    };
    const renderPdf = () => {
      if (!props.url) {
        return;
      }
      // Loading document.
      if (pdfViewer.value === null || pdfLinkService.value === null) {
        return;
      }
      if (loadingTask.value !== null) {
        loadingTask.value.destroy();
        loadingTask.value = null;
      }
      loadingTask.value = (window as any).pdfjsLib.getDocument({
        cMapUrl: CMAP_URL.value,
        cMapPacked: true,
        url: props.url,
      });
      return loadingTask.value.promise
        .then((pdfDocument: any) => {
          if (pdfDocument.loadingTask.destroyed || !props.url) {
            return;
          }
          pdfViewer.value.setDocument(pdfDocument);
          pdfLinkService.value.setDocument(pdfDocument, null);
          loadingTask.value = null;
        })
        .catch((error: any) => {
          console.log(error);
        });
    };
    onMounted(() => {
      pdfLibInit().then(() => {
        renderPdf();
      });
    });
    watch(
      () => props.url,
      () => {
        // 如果存在pdfViewer则取消渲染
        if (pdfViewer.value) {
          pdfViewer.value._cancelRendering();
        }
        renderPdf();
      }
    );

    return {
      pdfViewer,
      pdfLinkService,
      currentScale,
      loadingTask,
      CMAP_URL,
      containerRef,
    };
  },
});
</script>
