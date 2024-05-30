import ProductItems from './ProductItems';

const DUMMY = [
  {
    id: 'p1',
    title: 'Product 1',
    price: 80,
  },
  {
    id: 'p2',
    title: 'Product 2',
    price: 150,
  },
  {
    id: 'p3',
    title: 'Product 3',
    price: 220,
  },
  {
    id: 'p4',
    title: 'Product 4',
    price: 70,
  },
];

export default function Products() {
  return (
    <div className="w-[80%] m-auto bg-white mt-3 rounded p-2">
      <ul>
        {DUMMY.map((p) => {
          return (
            <ProductItems
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
            />
          );
        })}
      </ul>
    </div>
  );
}
