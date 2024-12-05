export const typesMap = {"article":{"/":{"path":"/article/","indexes":[6,0,7,9,10,1,2,5,3,4,8]}},"star":{"/":{"path":"/star/","indexes":[6,7,9,0,8]}},"timeline":{"/":{"path":"/timeline/","indexes":[6,7,9,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

