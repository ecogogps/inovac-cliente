CMS.registerEditorComponent({
  id: "align-left",
  label: "Align Left",
  fields: [
    {
      name: 'content',
      label: 'Content',
      widget: 'markdown'
    }
  ],
  pattern: /<div style="text-align:\s*left">([\s\S]*?)<\/div>/,
  fromBlock: function(match) {
    return {
      content: match[1]
    };
  },
  toBlock: function(obj) {
    return `<div style="text-align: left">${obj.content}</div>`;
  },
  toPreview: function(obj) {
    return `<div style="text-align: left">${obj.content}</div>`;
  }
});

CMS.registerEditorComponent({
  id: "align-center",
  label: "Align Center",
  fields: [
    {
      name: 'content',
      label: 'Content',
      widget: 'markdown'
    }
  ],
  pattern: /<div style="text-align:\s*center">([\s\S]*?)<\/div>/,
  fromBlock: function(match) {
    return {
      content: match[1]
    };
  },
  toBlock: function(obj) {
    return `<div style="text-align: center">${obj.content}</div>`;
  },
  toPreview: function(obj) {
    return `<div style="text-align: center">${obj.content}</div>`;
  }
});

CMS.registerEditorComponent({
  id: "align-right",
  label: "Align Right",
  fields: [
    {
      name: 'content',
      label: 'Content',
      widget: 'markdown'
    }
  ],
  pattern: /<div style="text-align:\s*right">([\s\S]*?)<\/div>/,
  fromBlock: function(match) {
    return {
      content: match[1]
    };
  },
  toBlock: function(obj) {
    return `<div style="text-align: right">${obj.content}</div>`;
  },
  toPreview: function(obj) {
    return `<div style="text-align: right">${obj.content}</div>`;
  }
});

CMS.registerEditorComponent({
  id: "align-justify",
  label: "Align Justify",
  fields: [
    {
      name: 'content',
      label: 'Content',
      widget: 'markdown'
    }
  ],
  pattern: /<div style="text-align:\s*justify">([\s\S]*?)<\/div>/,
  fromBlock: function(match) {
    return {
      content: match[1]
    };
  },
  toBlock: function(obj) {
    return `<div style="text-align: justify">${obj.content}</div>`;
  },
  toPreview: function(obj) {
    return `<div style="text-align: justify">${obj.content}</div>`;
  }
});
