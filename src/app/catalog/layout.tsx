import CatalogMenu from "@/components/catalog/catalog-menu-wrapper";


export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="pt-20">
         <CatalogMenu />
      {children}
    </section>
  );
}