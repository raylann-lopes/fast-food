import { useContext } from "react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { CartContext } from "../contexts/cart";

const CartSheet = () => {
    const {isOpen, toggleCard, products} = useContext(CartContext);
    return (
<Sheet open={isOpen} onOpenChange={toggleCard}>
<SheetContent>
  <SheetHeader>
    <SheetTitle>Are you absolutely sure?</SheetTitle>
    <SheetDescription>
      This action cannot be undone. This will permanently delete your
      account and remove your data from our servers.
    </SheetDescription>
  </SheetHeader>
  {products.map((product) => (
    <div key={product.id}>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
    </div>
  ))}
</SheetContent>
</Sheet>
);
};

export default CartSheet;