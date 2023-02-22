import json from '../functions/parser';
import read from '../functions/reader';

export default class GameSavingLoader2 {
  static async load() {
    // если есть возможность, хотелось бы узнать другие варианты для решения
    const data = await read();
    const value = await json(data);
    return value;
  }
}
