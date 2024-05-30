import CartItem from './CartItem';

export default function Cart() {
  return (
    <div className="w-96 m-auto bg-white mt-3 rounded min-h-32 p-2">
      <h1 className="font-semibold text-xl text-center">Cart</h1>
      <CartItem
        item={{ title: 'Goods', quantity: 1, total: 100, price: 100 }}
      />
    </div>
  );
}
