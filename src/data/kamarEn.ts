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
    deskripsiSingkat: '2 beds (1 double & 1 single)',
    fasilitas: ['Hot shower', 'WiFi', 'TV', 'AC', 'En-suite bathroom (squat toilet)'],
    gambarUtama: 'kamar homestay 1.jpeg'
  },
  {
    id: 'kamar-2-utama',
    nama: 'Superior Double Room',
    harga: 199000,
    tipe: 'utama',
    deskripsiSingkat: '1 double bed',
    fasilitas: ['Hot shower', 'WiFi', 'TV', 'AC', 'En-suite bathroom (seated toilet)'],
    gambarUtama: 'kamar homestay 2.jpeg'
  },
  {
    id: 'kamar-3-utama',
    nama: 'Premium Family Room',
    harga: 299000,
    tipe: 'utama',
    deskripsiSingkat: '2 beds (1 double & 1 single)',
    fasilitas: ['Hot shower', 'WiFi', 'TV', 'AC', 'En-suite bathroom (seated toilet)'],
    gambarUtama: 'kamar homestay 3.jpeg'
  },
  {
    id: 'kamar-joglo',
    nama: 'Classic Joglo Room',
    harga: 99000,
    tipe: 'joglo',
    deskripsiSingkat: '7 rooms in a traditional Javanese Joglo house, each with a 120cm bed.',
    fasilitas: ['WiFi', 'Shared bathroom'],
    gambarUtama: 'kamar homestay.jpeg'
  }
];
