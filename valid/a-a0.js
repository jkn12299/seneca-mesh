require('seneca')({tag:'a0'})
  //.test('print')
  .add('a:0')
  .use('..',{
    pin:'a:0'
  })
