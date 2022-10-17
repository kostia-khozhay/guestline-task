/* eslint-disable */
jest.mock('axios', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('react-slick', () => ({
  __esModule: true,
  default: jest.fn(),
}));
