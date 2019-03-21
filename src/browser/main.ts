import Vue, {CreateElement, VNode} from 'vue';

const app = new Vue({
  el: '#app',
  data: {
    requesting: false,
    response: ''
  },
  methods: {
    pingPong: function () {
      this.response = '';

      const req = new XMLHttpRequest();
      req.open('GET', '/ping');
      req.addEventListener('loadstart', () => {
        this.requesting = true;
      });
      req.addEventListener('load', function () {
        app.response = this.responseText;
      });
      req.addEventListener('error', () => { alert('error'); });
      req.addEventListener('abort', () => { alert('abort'); });
      req.addEventListener('loadend', () => {
        this.requesting = false;
      });
      req.send();
    }
  },
  render(h: CreateElement): VNode {
    const children = [
      h('button', {
        attrs: {
          disabled: this.requesting
        },
        on: {
          click: this.pingPong
        }
      }, 'Ping'),
      h('div', this.response)
    ];

    return h('div', children);
  }
});
