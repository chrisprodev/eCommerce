export const categories = [
  {
    id: 1,
    name: "New Arrivals",
    icon: "new",
  },
  {
    id: 2,
    name: "Featured",
    icon: "star",
  },
  {
    id: 3,
    name: "Photography",
    icon: "camera",
  },
  {
    id: 4,
    name: "Computers",
    icon: "computer",
  },
  {
    id: 5,
    name: "Entertaiment",
    icon: "tv",
  },
  {
    id: 6,
    name: "Drones",
    icon: "drone",
  },
  {
    id: 7,
    name: "Mobile",
    icon: "mobile",
  },
  {
    id: 8,
    name: "Audio",
    icon: "audio",
  },
  {
    id: 9,
    name: "Film",
    icon: "6",
  },
  {
    id: 10,
    name: "Accesories",
    icon: "10",
  },
];

export const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    title: "Easy Returns",
    description:
      "Our return policy is simple and that is why customers love our shop.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Customer Service",
    description: "We offer amazing customer service no matter what happens.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    title: "Hight Quality",
    description:
      "All of out products go through very stric inspection before we dispatch them.",
  },
];

export const productsData = [
  {
    id: "1",
    name: "Sony Alpha 7 IV",
    image: "https://...",
    category: "Photography",
    price: 2499,
    mainFeatures: [
      {
        id: 1,
        description: "33MP Full-Frame Exmor R CMOS Sensor",
      },
      {
        id: 2,
        description: "4K 60p Video in 10-Bit, S-Cinetone",
      },
      {
        id: 3,
        description: "5-Axis SteadyShot Image Stabilization",
      },
    ],
    featules: [
      {
        id: 1,
        title: "Sensor",
        description:
          "Newly developed 33MP Exmor R full-frame sensor features a back-illuminated design that promotes high clarity, low noise, and vivid color rendering. This design benefits working in low-light conditions and works in conjunction with a broad sensitivity range of ISO 100-51200.",
      },
      {
        id: 2,
        title: "BIONZ XR Processor",
        description:
          "Using the flagship-class BIONZ XR engine, high-speed image processing capabilities are available for fast continuous shooting, 4K video recording, and advanced AF tracking performance. The quick processing also helps to reduce rolling shutter and other motion distortions for clean rendering of moving subjects.",
      },
      {
        id: 3,
        title: "Video",
        description:
          "Making full use of the high-resolution 33MP sensor and fast processing capabilities, UHD 4K 30p XAVC HS 10-bit recording is possible using the full width of the sensor, offering 7K oversampling for impressive sharpness and realism.",
      },
      {
        id: 4,
        title: "Gamma Controls",
        description:
          "S-Cinetone can be used to deliver distinct colors and healthy-looking skin tone rendering that matches the FX9 and FX6 cameras, along with the a1 and a7S III, and is based on technology from the professional Cinema Line cameras, such as the VENICE.",
      },
    ],
  },
  {
    id: "2",
    name: "DJI Mavic Air 2",
    image: "https://...",
    price: 699,
  },
  {
    id: "3",
    name: "Sony FE 50mm 1.2",
    image: "https://...",
    price: 1999,
  },
  {
    id: "4",
    name: "Canon EOS R5",
    image: "https://...",
    price: 3799,
  },
  {
    id: "5",
    name: "Sigma 20-70mm 2.8",
    image: "https://...",
    price: 1499,
  },
  {
    id: "6",
    name: "ND Filter",
    image: "https://...",
    price: 19.0,
  },
  {
    id: "7",
    name: "Samsung 65 TV",
    image: "https://...",
    price: 499,
  },
  {
    id: "8",
    name: "MSI Gamer Laptop",
    image: "https://...",
    price: 1499,
  },
];

export const shoppingCart = [
  {
    id: "1",
    name: "MSI Gamer Laptop",
    price: 1499,
  },
  {
    id: "2",
    name: "Sony FE 50mm 1.2",
    price: 1999,
  },
  {
    id: "3",
    name: "Canon EOS R5",
    price: 3799,
  },
];
