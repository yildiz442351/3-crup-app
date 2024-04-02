import { render, screen, within } from '@testing-library/react';
import List from '.';
import { expect, test } from 'vitest';

const testUsers = [
  {
    name: 'Mehmet',
    mail: 'mehmet60@gmail.com',
    age: 60,
  },
  {
    name: 'Ayşe',
    mail: 'ayşe@gmail.com',
    age: 20,
  },
  {
    name: 'Ali',
    mail: 'alihttp@gmail.com',
    age: 30,
  },
];

it('göndeirlen her kullanıcı için ekrana satır basılır', () => {
  render(<List users={testUsers} />);

  // table body alanın seç
  const body = screen.getByTestId('table-body');

  // body kısmındaki bütün satırları al
  // belirli bir kapsayacı içerisndeki elemanlar seçmek için within()
  const rows = within(body).getAllByRole('row');

  // satır sayısı users dizisindeki eleman saysına eşit mi kontrol?
  expect(rows).toHaveLength(testUsers.length);
});

it('her bir kullanıcı için isim email yaş hücreleri bulunur', () => {
  render(<List users={testUsers} />);

  // dizideki herbir kullanıcı için ekrana kullanıcının
  // değerlerini içeren tablo hücresi basılıyor mu ?
  for (const user of testUsers) {
    // kullanıcın ismini içeren tablo hücresini
    screen.getByRole('cell', { name: user.name });

    // kullanıcın mailini içeren tablo hücresini
    screen.getByRole('cell', { name: user.mail });

    // kullanıcın yaşını içeren tablo hücresini
    screen.getByRole('cell', { name: user.age });
  }
});