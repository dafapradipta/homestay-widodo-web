export interface Kamar {
  id: string;
  nama: string;
  harga: number;
  tipe: 'utama' | 'joglo';
  deskripsiSingkat: string;
  fasilitas: string[];
  gambarUtama: string; // referensi ke nama file di assets
}

export const dataKamar: Kamar[] = [
  {
    id: 'kamar-1-utama',
    nama: 'Deluxe Family Room',
    harga: 299000,
    tipe: 'utama',
    deskripsiSingkat: '2 kasur (besar & kecil)',
    fasilitas: ['Air panas', 'WiFi', 'TV', 'AC', 'Kamar mandi dalam (WC jongkok)'],
    gambarUtama: 'kamar homestay 1.jpeg'
  },
  {
    id: 'kamar-2-utama',
    nama: 'Superior Double Room',
    harga: 199000,
    tipe: 'utama',
    deskripsiSingkat: '1 kasur besar',
    fasilitas: ['Air panas', 'WiFi', 'TV', 'AC', 'Kamar mandi dalam (WC duduk)'],
    gambarUtama: 'kamar homestay 2.jpeg'
  },
  {
    id: 'kamar-3-utama',
    nama: 'Premium Family Room',
    harga: 299000,
    tipe: 'utama',
    deskripsiSingkat: '2 kasur (besar & kecil)',
    fasilitas: ['Air panas', 'WiFi', 'TV', 'AC', 'Kamar mandi dalam (WC duduk)'],
    gambarUtama: 'kamar homestay 3.jpeg'
  },
  {
    id: 'kamar-joglo',
    nama: 'Classic Joglo Room',
    harga: 99000,
    tipe: 'joglo',
    deskripsiSingkat: 'Terdapat 7 kamar di rumah hunian tradisional Joglo dengan 1 kasur ukuran 120cm per kamar.',
    fasilitas: ['WiFi', 'Kamar mandi terpisah (shared)'],
    gambarUtama: 'kamar homestay.jpeg'
  }
];
