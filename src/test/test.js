import GameSavingLoader from '../promises/GameSavingLoader';
import GameSavingLoader2 from '../asynAwait/GameSavingLoader';

test('testing promises', (done) => {
  const save = new GameSavingLoader();

  save.load().then((data) => {
    expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
    done();
  });
});

test('testing asyn/await', (done) => {
  GameSavingLoader2.load().then((data) => {
    expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
    done();
  });
});
