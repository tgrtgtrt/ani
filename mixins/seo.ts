export default function seo() {
  function setProperty(title: string, meta: any, links: any, scripts: any) {
    useHead({
      htmlAttrs: {
        lang: 'us'
      },
      title: title,
      meta: [...meta],
      link: [...links],
      script: [...scripts],
      noscript: []
    })
  }

  return {setProperty};
}
