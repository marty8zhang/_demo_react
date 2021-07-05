export const mockedGetOne = jest.fn();
export const mockedGetAll = jest.fn();
export const mockedAddChangeListener = jest.fn();
export const mockedRemoveChangeListener = jest.fn();

export default jest.fn().mockImplementation(() => ({
  getAll: mockedGetAll,

  getOne: mockedGetOne,

  addChangeListener: mockedAddChangeListener,

  removeChangeListener: mockedRemoveChangeListener,
}));
