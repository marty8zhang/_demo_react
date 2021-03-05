export interface Blog {
  uri: string,
  title: string,
  content: string,
}

export interface DataSource {
  getBlogs(): Blog[];

  getBlog(uri?: string): Blog | null;

  addChangeListener(listener: () => void): void;

  removeChangeListener(listener: () => void): void;
}

export default class FakeDataSource implements DataSource {
  getBlogs(): Blog[] {
    return [
      {
        uri: 'fake-blog-one',
        title: 'Fake Blog One',
        content: 'This is the content of the Fake Blog One.',
      },
      {
        uri: 'fake-blog-two',
        title: 'Fake Blog Two',
        content: 'This is the content of the Fake Blog Two.',
      },
      {
        uri: 'fake-blog-three',
        title: 'Fake Blog Three',
        content: 'This is the content of the Fake Blog Three.',
      },
    ];
  }

  getBlog(uri?: string): Blog | null {
    if (uri === null) {
      return this.getBlogs()[0];
    }

    return this.getBlogs().reduce(
      (result: Blog | null, blog: Blog) => (result || (uri === blog.uri ? blog : null)),
      null,
    );
  }

  addChangeListener(listener: () => void): void {
    console.log('Change listener added.');
  }

  removeChangeListener(listener: () => void): void {
    console.log('Change listener removed.');
  }
}

export const fakeDataSource = new FakeDataSource();
