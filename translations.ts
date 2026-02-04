import { Language, TranslationContent } from './types';

const partnerLogos = [
  "1thUA3u7FDeyNkkCWMhSk2aswxjJn1Pro",
  "1BnX3zAgMdY_sWeuhK-kKmvzB8iqKoixD",
  "1g7xQW1J4PQNKLrC2JYUDCJ4O0-n84gx2",
  "1Y-xoordj_jULcuidncSBXww5eYrcFfza",
  "19JKsEuJ96t1P9oS2cPbyTHITu_r6Vz9m"
];

const clientList = [
  "PT Wings Surya",
  "PT Sun Paper Source",
  "PT Karya Indah Alam Sejahtera",
  "PT Multi Duta Utari",
  "PT Karunia Alam Segar",
  "PT Erindo Mandiri (Aquase)",
  "PT Samator Gas Industri",
  "PT Suparma, Tbk",
  "PT Medika Maesindo Indonesia",
  "PT Bumi Menara Internusa",
  "PT Sekar Bumi, Tbk",
  "PT Apsara Tiayasa Sambada",
  "PT Intan Pariwara",
  "PT Macanan Jaya Cemerlang",
  "PT Winaros Kawula Bahari",
  "PT Medika Maesindo Global",
  "PT Ganda Sugih Artaboga",
  "PT Pertiwi Indo Mas",
  "PT Tirta Sari Cemerlang (Tir - Sa)",
  "PT Tirta Anugrah Sejati",
  "Anugrah Timbers Mebel",
  "PT Jamu Jago",
  "PT Misaja Mitra",
  "PT TBZ Industrial Indonesia",
  "PT Java Color Tech",
  "PT Master Kidz Indonesia",
  "PT Muliaform Grafido",
  "PT Tri Sukses Packaging",
  "PT Maesindo Indonesia",
  "PT DCP Traveling Product",
  "PT Victoria Care Indonesia"
];

export const translations: Record<Language, TranslationContent> = {
  [Language.ID]: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      vision: "Visi Misi",
      machinery: "Kapasitas",
      products: "Produk",
      customers: "Pelanggan",
      contact: "Kontak"
    },
    hero: {
      title: "PT Indah Tjandra Abadi",
      subtitle: "Produsen OPP Adhesive Tape Terpercaya untuk Solusi Industri & Pengemasan.",
      cta: "Lihat Produk Kami"
    },
    about: {
      title: "Latar Belakang dan Bisnis Utama",
      historyLabel: "HISTORY",
      content: [
        "Kami dengan bangga memperkenalkan diri sebagai perusahaan multi-produk yang sudah dikenal baik menawarkan kepada pelanggan yang kami hormati berbagai pilihan BOPP tape.",
        "Terletak di Sidoarjo, Indonesia, PT. Indah Tjandra Abadi didirikan pada awal tahun 2017. Di bawah pimpinan Bapak Andrea Kurniawan Indah, perusahaan ini bekerja dan terus berkembang di Indonesia."
      ],
      slogan: "PRODUK BERKUALITAS DENGAN HARGA TERJANGKAU HANYA DAPAT DITEMUKAN DI PERUSAHAAN KAMI PT INDAH TJANDRA ABADI"
    },
    visionMission: {
      introSlogan: "KAMI SELALU MEMPERBAHARUI TEKNOLOGI, UNTUK MENINGKATKAN STANDAR KUALITAS DAN EFISIENSI",
      vision: {
        title: "VISI",
        items: [
          "Menyediakan BOPP Tape ke pasar industri dan grosir",
          "Mencari Sasaran mutu yang telah ditetapkan di setiap proses pekerjaan dan melakukan evaluasi berkala"
        ]
      },
      mission: {
        title: "MISI",
        items: [
          "Memperhatikan kualitas produk dengan menetapkan standar kontrol kualitas yang ketat sehingga setiap produk yang beredar di pasar dipastikan bebas cacat produksi dan memiliki standar kualitas yang tinggi.",
          "Efisiensi di segala bidang sehingga harga produk bisa bersaing dengan produk yang sudah ada di pasar",
          "Menanamkan image ke konsumen bahwa produk berkualitas dengan harga terjangkau hanya bisa didapatkan di PT Indah Tjandra Abadi",
          "Selalu melakukan pembaharuan teknologi agar bisa meningkatkan standar mutu dan efisiensi",
          "Mengedukasi customer perlunya memilih produk yang tepat agar bisa menciptakan efisiensi"
        ]
      }
    },
    machinery: {
      title: "Kapasitas",
      intro: "PT. Indah Tjandra Abadi memiliki beberapa mesin untuk produksi dan pendukung, diantaranya adalah:",
      quote: "MENERAPKAN STANDAR KONTROL KUALITAS YANG KETAT DAN MEMILIKI STANDAR KUALITAS TINGGI UNTUK PRODUK KAMI",
      production: {
        title: "Mesin Utama",
        items: [
          "1 lini mesin coating",
          "4 unit mesin slitter"
        ]
      },
      supporting: {
        title: "Mesin Pendukung",
        items: [
          "2 unit mesin loading dan unloading",
          "2 unit mesin potong core",
          "1 set kompresor industri",
          "1 set kompresor"
        ]
      }
    },
    products: {
      title: "Produk",
      label: "Produk :",
      items: [
        "BOPP Tape Transparan",
        "BOPP Tape Coklat",
        "BOPP Tape Warna",
        "BOPP Tape Printing"
      ],
      specs: {
        width: {
          label: "Lebar produk yang bisa kami produksi adalah",
          value: "12 mm, 18 mm, 24 mm, 36 mm, 45 mm, 48 mm, 55 mm, 60 mm, 72 mm, 96 mm."
        },
        thickness: {
          label: "Ketebalan produk",
          value: "40 micron, 43 micron, 45 micron, 48 micron, 50 micron, 55 micron."
        },
        length: {
          label: "Panjang produk yang bisa kami produksi sampai dengan",
          value: "1000 meter."
        }
      },
      footer: "Tersedia dalam berbagai ukuran lebar, ketebalan, dan ukuran core."
    },
    customers: {
      title: "Daftar Pelanggan",
      subtitle: "Melayani pemimpin industri di seluruh Indonesia dengan kualitas tanpa kompromi.",
      types: [],
      clientNames: [clientList],
      logos: partnerLogos
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Kami siap melayani kebutuhan perekat industri Anda di seluruh Indonesia.",
      slogan: "Produk berkualitas dengan harga terjangkau hanya dapat ditemukan di perusahaan kami PT. Indah Tjandra Abadi",
      locations: {
        headquarter: {
          title: "SIDOARJO ( PUSAT )",
          address: "Jl. Raya Siwalanpanji no 5, RT 13 RW 04, Buduran, Sidoarjo",
          phone: "+6231 8960944",
          fax: "+6231 99034481",
          wa: ["+6281 703181000", "+6281 703086000"],
          email: ["royaltapes@indahtjandraabadi.co.id", "admin@indahtjandraabadi.co.id"]
        },
        branch: {
          title: "SEMARANG ( CABANG )",
          address: "Jl. Ketapang Tengah no EB 22, RT 03 RW 06 kel. pedurungan Lor, Semarang 50192",
          wa: ["+6281 703011000"],
          email: ["admin.smg@indahtjandraabadi.co.id"]
        }
      },
      form: {
        name: "Nama Lengkap",
        email: "Email",
        message: "Pesan",
        submit: "Kirim Pesan"
      }
    },
    legal: {
      close: "Tutup",
      privacy: {
        title: "Kebijakan Privasi",
        content: `PT Indah Tjandra Abadi menghargai privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.\n\n1. Pengumpulan Informasi: Kami mengumpulkan nama, alamat email, dan nomor telepon yang Anda berikan secara sukarela melalui formulir kontak atau komunikasi langsung (WhatsApp/Email).\n2. Penggunaan Informasi: Informasi ini digunakan semata-mata untuk menanggapi pertanyaan bisnis Anda dan menyediakan layanan informasi produk.\n3. Keamanan Data: Kami mengambil langkah-langkah administratif yang wajar untuk melindungi data kontak Anda dari akses yang tidak sah.\n4. Berbagi Data: Informasi Anda tidak akan dijual atau dibagikan kepada pihak ketiga untuk tujuan pemasaran.\n5. Cookies: Situs ini mungkin menggunakan cookie teknis dasar untuk fungsionalitas navigasi.`
      },
      terms: {
        title: "Syarat dan Ketentuan",
        content: `Dengan menggunakan situs web PT Indah Tjandra Abadi, Anda menyetujui ketentuan berikut:\n\n1. Hak Kekayaan Intelektual: Konten situs termasuk logo dan gambar produk adalah milik PT Indah Tjandra Abadi.\n2. Penggunaan Konten: Dilarang menggandakan konten situs tanpa izin tertulis untuk kepentingan komersial pihak lain.\n3. Batasan Tanggung Jawab: Informasi pada situs disediakan untuk tujuan umum. Kami tidak bertanggung jawab atas kesalahan teknis atau gangguan akses sementara.\n4. Informasi Produk: Spesifikasi produk yang tercantum dapat berubah sewaktu-waktu sesuai dengan pengembangan teknis perusahaan.\n5. Hukum: Ketentuan ini diatur sesuai dengan hukum yang berlaku di Republik Indonesia.`
      }
    }
  },
  [Language.EN]: {
    nav: {
      home: "Home",
      about: "About",
      vision: "Vision",
      machinery: "Capacity",
      products: "Products",
      customers: "Customers",
      contact: "Contact"
    },
    hero: {
      title: "PT Indah Tjandra Abadi",
      subtitle: "Reliable OPP Adhesive Tape Manufacturer for Industrial & Packaging Solutions.",
      cta: "Explore Our Products"
    },
    about: {
      title: "Background and Main Business",
      historyLabel: "HISTORY",
      content: [
        "We are pleased to introduce ourselves as a well established multi product company offering to our esteemed customers a range of BOPP Tapes.",
        "Located in Sidoarjo, Indonesia, PT. Indah Tjandra Abadi was laid in the early year of 2017. Under the leading light of Mr. Andrea Kurniawan Indah the company is fluently working and rapidly growing in Indonesia."
      ],
      slogan: "THE QUALITY PRODUCTS AT AFFORDABLE PRICES CAN ONLY BE FOUND IN OUR COMPANY PT INDAH TJANDRA ABADI"
    },
    visionMission: {
      introSlogan: "WE ALWAYS UPDATE THE TECHNOLOGY, IN ORDER TO IMPROVE THE STANDARDS OF QUALITY AND EFFICIENCY",
      vision: {
        title: "VISION",
        items: [
          "Supply BOPP Tape to Industrial and Wholesale market",
          "Seeking quality objectives that have been established in every process of work and conduct regular evaluation"
        ]
      },
      mission: {
        title: "MISSION",
        items: [
          "Attention to product quality, by applying strict quality control standards, so that every product in the market be free of defect, and has high standard quality",
          "Efficiency in all fields, so that the price of the products sold can compete with existing product in the market",
          "Embed image to consumers that the quality products at affordable price can only be found in our PT. Indah Tjandra Abadi.",
          "Always update the technology, in order to improve the standards of quality and efficiency.",
          "Educate customer on the need to choose the right product in order to create efficiency"
        ]
      }
    },
    machinery: {
      title: "OUR CAPACITY",
      intro: "PT. Indah Tjandra Abadi have several machines to produce and support the production process:",
      quote: "APPLYING STRICT QUALITY CONTROL STANDARDS AND HAS HIGH STANDARD QUALITY FOR OUR PRODUCT",
      production: {
        title: "Main machine",
        items: [
          "1 line coating machine",
          "4 units slitter machine"
        ]
      },
      supporting: {
        title: "Supporting machine",
        items: [
          "2 units loading and unloading machine",
          "2 units paper core cutting machine",
          "1 set heavy duty compressor"
        ]
      }
    },
    products: {
      title: "PRODUCT",
      label: "Product :",
      items: [
        "BOPP Tape Transparent",
        "BOPP Tape Brown",
        "BOPP Tape Color",
        "BOPP Tape Printed"
      ],
      specs: {
        width: {
          label: "Width of the product",
          value: "12mm, 18mm, 24mm, 36mm, 45mm, 48mm, 55mm, 60mm, 72mm, 96mm."
        },
        thickness: {
          label: "Thickness of the product",
          value: "40micron, 43micron, 45 micron, 48 micron, 50 micron, 55 micron."
        },
        length: {
          label: "The length of the BOPP Tape up to",
          value: "1000 meters."
        }
      },
      footer: "Available in various widths, thicknesses, and core sizes."
    },
    customers: {
      title: "Our Customer List",
      subtitle: "Serving industry leaders across Indonesia with uncompromising quality.",
      types: [],
      clientNames: [clientList],
      logos: partnerLogos
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are ready to serve your industrial adhesive needs throughout Indonesia.",
      slogan: "Quality products at affordable prices can only be found in our company PT. Indah Tjandra Abadi",
      locations: {
        headquarter: {
          title: "SIDOARJO ( HEADQUARTER )",
          address: "Jl. Raya Siwalanpanji no 5, RT 13 RW 04, Buduran, Sidoarjo",
          phone: "+6231 8960944",
          fax: "+6231 99034481",
          wa: ["+6281 703181000", "+6281 703086000"],
          email: ["royaltapes@indahtjandraabadi.co.id", "admin@indahtjandraabadi.co.id"]
        },
        branch: {
          title: "SEMARANG ( BRANCH )",
          address: "Jl. Ketapang Tengah no EB 22, RT 03 RW 06 kel. pedurungan Lor, Semarang 50192",
          wa: ["+6281 703011000"],
          email: ["admin.smg@indahtjandraabadi.co.id"]
        }
      },
      form: {
        name: "Full Name",
        email: "Email Address",
        message: "Message",
        submit: "Send Message"
      }
    },
    legal: {
      close: "Close",
      privacy: {
        title: "Privacy Policy",
        content: `PT Indah Tjandra Abadi respects your privacy. This policy explains how we collect and protect your information.\n\n1. Information Collection: We only collect contact details provided by you voluntarily via contact forms, WhatsApp, or email.\n2. Information Use: This data is exclusively used to respond to your inquiries and handle business transactions.\n3. Data Security: We maintain reasonable security measures to keep your contact info confidential.\n4. Third-Party Sharing: We do not sell or share your personal data with third parties for marketing purposes.\n5. Cookies: This website uses essential cookies to ensure smooth navigation.`
      },
      terms: {
        title: "Terms of Service",
        content: `By accessing the PT Indah Tjandra Abadi website, you agree to the following:\n\n1. Intellectual Property: All site content, including brand logos and product imagery, is the property of PT Indah Tjandra Abadi.\n2. Content Usage: Reproduction of content for unauthorized commercial use is strictly prohibited.\n3. Limitation of Liability: Site content is for informational purposes. We are not liable for any temporary technical errors or access issues.\n4. Product Specs: Product specifications may be updated without prior notice as part of our continuous quality improvement.\n5. Jurisdiction: These terms are governed by the laws of the Republic of Indonesia.`
      }
    }
  }
};