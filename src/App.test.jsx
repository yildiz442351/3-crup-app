import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect } from 'vitest';
import App from './App';

const multiple = (a, b, c) => {
  return a * b * c;
};

// Bir bileşen veya method ile alaklı birden fazla test olduğu zman
// bu testleri gruplandırmak için describe kullanırız
describe('Fonksyion Testleri', () => {
  test('Fonksiyon doğru çalışıyor mu', () => {
    expect(multiple(10, 2, 3)).toBe(60);
  });

  // test() === it()
  it('Fonksiyon negtaif sayılar doğru çalışıyor mu', () => {
    expect(multiple(-10, -2, -3)).toBe(-60);
  });

  test('Fonksiyon 9 ile doğru çalışıyor mu', () => {
    expect(multiple(-10, 0, -3)).toBe(0);
  });
});

it('Uygulama doğru şekilde çalışıyor mu?', async () => {
  const user = userEvent.setup();
  render(<App />);

  // gerekli elemanları çağır
  const nameInp = screen.getByLabelText('İsim');
  const mailInp = screen.getByLabelText('Email');
  const ageInp = screen.getByLabelText('Yaş');
  const sendBtn = screen.getByRole('button', {
    name: 'Kullanıcı Ekle',
  });

  // 1) inputları doldur
  await user.type(nameInp, 'Veli');
  await user.type(mailInp, 'veli@gmail.com');
  await user.type(ageInp, '24');

  // 2) kullanıcı ekle butonuna tıkla
  await user.click(sendBtn);

  // 3) inputlara girilen verilere uygun tablo hücreleri ekrana basıldı mı?
  screen.getByRole('cell', { name: 'Veli' });
  screen.getByRole('cell', { name: 'veli@gmail.com' });
  screen.getByRole('cell', { name: '24' });
});