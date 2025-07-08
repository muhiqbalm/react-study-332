// ✅ Top-level component: Has all the data and passes it down
export default function ProductDashboard({ data }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: -48,
        padding: 24,
      }}
    >
      <UserDetails user={data.user} />

      <StatList stats={data.stats} />

      <ProductList products={data.products} />
    </div>
  );
}

function UserDetails({ user }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: "100%",
        padding: "8px 0px 16px 0px",
        borderBottom: "1px solid var(--primary-border)",
      }}
    >
      <img
        src={user.avatar}
        alt="profile-image"
        width={64}
        height={64}
        style={{ objectFit: "cover", borderRadius: "50%" }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ margin: 0 }}>Hello, {user.name || "User"}!</h2>

        {user.role && <p>{user.role}</p>}
      </div>
    </div>
  );
}

function StatCard({ stat, text }) {
  return (
    <div className="card">
      <b style={{ fontSize: 48 }}>{stat}</b>

      <p>{text}</p>
    </div>
  );
}

function StatList({ stats }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "16px 0px 24px 0px",
        borderBottom: "1px solid var(--primary-border)",
      }}
    >
      <h2 style={{ margin: 0 }}>Statistic</h2>

      <div
        style={{
          display: "grid",
          columnGap: "24px",
          rowGap: "24px",
          gridTemplateColumns: "auto auto auto",
        }}
      >
        <StatCard text="Total Products" stat={stats.totalProducts} />

        <StatCard text="Total Value" stat={stats.totalValue} />

        <StatCard text="Low Stock Count" stat={stats.lowStockCount} />
      </div>
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "16px 0px 24px 0px",
        borderBottom: "1px solid var(--primary-border)",
      }}
    >
      <h2 style={{ margin: 0 }}>Product List</h2>

      <div
        style={{
          display: "grid",
          columnGap: "24px",
          rowGap: "24px",
          gridTemplateColumns: "repeat(6, 350px)",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  // name: "Coffee Maker",
  //   price: 149,
  //   stock: 8,
  //   category: "Appliances",

  return (
    <div className="card">
      <b style={{ fontSize: 20 }}>{product.name}</b>

      <p>{product.category}</p>

      <hr
        style={{ width: "100%", border: "1px solid var(--primary-border)" }}
      />

      <p>Price: {product.price}</p>

      <p>Stock: {product.stock}</p>
    </div>
  );
}
