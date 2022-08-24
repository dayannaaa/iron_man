input.onkeyup = function (e) {
  var len = this.value.replace(/\s+/g, "").length;

  if (len > 16) return (this.value = this.fix);
  if (len % 4 === 0) {
    if (len === 16) {
      b.hidden = 0;
      this.fix = this.value;
      return;
    }
    this.value += " ";
  }
};
