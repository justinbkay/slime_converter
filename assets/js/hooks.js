let Hooks = {};

Hooks.SelectAll = {
  mounted() {
    this.el.addEventListener("click", () => {
      this.el.select();
    });
  },
};

Hooks.ClipBoard = {
  mounted() {
    this.el.addEventListener("click", () => {
      const originalHtml = this.el.innerHTML;
      const decodedHtml = this.htmlDecode(this.el.innerHTML);
      navigator.clipboard.writeText(decodedHtml);

      this.el.innerHTML = this.svg() + originalHtml;
      setTimeout(() => {
        this.el.innerHTML = originalHtml;
      }, 2000);
    });
  },
  svg() {
    return '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> Copied! <br>';
  },
  htmlDecode(encodedHtml) {
    var doc = new DOMParser().parseFromString(encodedHtml, "text/html");
    return doc.documentElement.textContent;
  },
};

export default Hooks;
