import json from '../functions/parser';
import read from '../functions/reader';

export default class GameSavingLoader {
  load() {
    // если есть возможность, хотелось бы узнать другие варианты для решения
    const data = read();
    const value = data
      .then((res) => json(res))
      .catch((err) => new Error(err));
    return value;
  }
}
