export const metadata = {
  title: 'Magenta Boutique RD | Moda femenina · Tienda física y online',
  description: 'Magenta Boutique RD: moda femenina con tienda física y online, envíos a todo el país. Nueva colección otoño-invierno disponible. Pide por WhatsApp.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
