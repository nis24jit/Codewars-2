function createTemplate(template) {
  return function (obj) {
    return template.replace(/{{(\w+)}}/g, (_, v) => obj[v] || '');
  };
}
