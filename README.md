### Meteor 範例

 #### 安裝

  1. create meteor project
  
      meteor create books-sample

  2. install react related
  
      meteor npm install --save react react-dom prop-types

  3. data connect related
  
      meteor npm install --save react-addons-pure-render-mixin

      meteor add react-meteor-data

#### 撰寫步驟

  1. client html 進入點 (./client/main.html)

    設定 <div id="react-root"></div>

  2. client js 進入點 (./client/main.js)

    利用 Meteor.startup 啟動 <Books/>

  3. create ui (./imports/ui/container)

    ＊訂閱 Meteor.subscribe('books'); Render 至畫面
    ＊利用 createContainer 建立 components 與 mongodb 資料綁定

  4. create react ui

    -Books.js
      -AddBook.js
      -BooksList.js

  5. create api (./imports/api/books)

    ＊ books.js
    
      meteor/mongo -> 建立 Books DB Collection

    ＊ method.js

      建立 DB 新增方法 addBook

    ＊ './server/publications.js'

      發布 books collection

  6. server 端啟動程式 (./server/main.js)

    ＊綁定 發布 books
    ＊綁定 新增方法 addBook

  7. client css 撰寫 （./client/main.css)

### 參考範例

  https://github.com/themeteorchef/getting-started-with-react




  