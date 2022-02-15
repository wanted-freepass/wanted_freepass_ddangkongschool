interface BookData {
  id: number;
  src: string;
  alt: string;
}

interface Image {
  SRC: string;
  WIDTH: string;
  HEIGHT: string;
  ALT: string;
}

interface Book {
  WIDTH: string;
  HEIGHT: string;
}

export const BOOK_DATA: BookData[] = [
  {
    id: 0,
    src: '/images/checkedBanner/book_1.png',
    alt: 'book_1',
  },
  {
    id: 1,
    src: '/images/checkedBanner/book_2.png',
    alt: 'book_2',
  },
  {
    id: 2,
    src: '/images/checkedBanner/book_3.png',
    alt: 'book_3',
  },
];

export const CHECKED_IMAGE: Image = {
  SRC: '/images/checkedBanner/yellowCheck.gif',
  WIDTH: '190',
  HEIGHT: '120',
  ALT: 'check',
};

export const BOOK_IMAGE: Book = {
  WIDTH: '180',
  HEIGHT: '230',
};
