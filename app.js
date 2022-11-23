const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models'); //db.sequelize

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');

const app = express();
app.set('port', process.env.PORT || 3333);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
});

// 서버 시작 시 데이터베이스와 연결하기 위한 함수
sequelize.sync({force: false}) // true: 테이블 생성, false: 테이블 비생성
    .then(() => {
        console.log('데이터베이스 연결됨');
    }).catch((e) => {
        console.error(e);
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);
