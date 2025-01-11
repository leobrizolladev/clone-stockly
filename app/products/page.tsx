import { PlusCircleIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
// import { db } from "../_lib/prisma";

export default async function Products() {
  // const products = await db.product.findMany();

  return (
    <div className="w-full space-y-8 p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-bold">Produtos</h2>
        </div>

        <Button className="gap-2">
          <PlusCircleIcon size={20} />
          Novo Produto
        </Button>
      </div>
    </div>
  );
}
