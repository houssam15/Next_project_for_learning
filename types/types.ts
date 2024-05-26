export interface User {
    id: number;
    username: string;
    email: string;
    phone: string;
}

export const fakeUsers: User[] = [
    {
      id: 1,
      username: 'johndoe',
      email: 'johndoe@example.com',
      phone: '555-1234'
    },
    {
      id: 2,
      username: 'janesmith',
      email: 'janesmith@example.com',
      phone: '555-5678'
    },
    {
      id: 3,
      username: 'bobbrownr',
      email: 'bobbrownr@example.com',
      phone: '555-9012'
    },
    {
      id: 4,
      username: 'sarahjones',
      email: 'sarahjones@example.com',
      phone: '555-3456'
    },
    {
      id: 5,
      username: 'mikewalker',
      email: 'mikewalker@example.com',
      phone: '555-7890'
    }
  ];