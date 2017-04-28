'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const dataList = {
        list: [
          { id: 1, title: 'to home!!', url: '/' },
          { id: 2, title: 'this news!!!!', url: '/news' },
        ],
      };

      yield this.ctx.render('index.html', dataList);
    }

    * news() {

      const dataList = {
        list: [
          { id: 1, title: 'to home', url: '/' },
          { id: 2, title: 'this news', url: '/news' },
        ],
      };

      yield this.ctx.render('news.html', dataList);
    }
  }
  return HomeController;
};
