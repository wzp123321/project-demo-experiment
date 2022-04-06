const getJavsScript = (src: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.onload = resolve;
    script.onerror = reject;

    script.src = src;
    document.body.append(script);
  });
};
const getCss = (href: string) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");

    link.onload = resolve;
    link.onerror = reject;

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.href = href;
    document.body.append(link);
  });
};
const getPdfjsDist = (pdfjsDistPath: string) => {
  return getJavsScript(`${pdfjsDistPath}/build/pdf.js`).then(() => {
    return Promise.all([
      getJavsScript(`${pdfjsDistPath}/web/pdf_viewer.js`),
      getCss(`${pdfjsDistPath}/web/pdf_viewer.css`),
    ]);
  });
};
export default getPdfjsDist;
