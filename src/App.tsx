import './App.css'

// お菓子のモックデータ
const mockSnacks = [
  {
    id: 1,
    name: 'チョコレートケーキ',
    price: 450,
    category: 'ケーキ',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    description: '濃厚なチョコレートの風味が楽しめる人気のケーキです',
  },
  {
    id: 2,
    name: 'いちごタルト',
    price: 380,
    category: 'タルト',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop',
    description: '新鮮ないちごをたっぷり使ったタルトです',
  },
  {
    id: 3,
    name: '抹茶クッキー',
    price: 280,
    category: 'クッキー',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
    description: '京都産抹茶を使用した上品な味わいのクッキー',
  },
  {
    id: 4,
    name: 'バニラマフィン',
    price: 320,
    category: 'マフィン',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=300&fit=crop',
    description: 'ふわふわ食感のバニラマフィンです',
  },
  {
    id: 5,
    name: 'レモンチーズケーキ',
    price: 420,
    category: 'ケーキ',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
    description: '爽やかなレモンとクリームチーズの絶妙な組み合わせ',
  },
  {
    id: 6,
    name: 'アーモンドビスコッティ',
    price: 350,
    category: 'ビスコッティ',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
    description: '香ばしいアーモンドの風味が特徴的なビスコッティ',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">🍰 お菓子とりこ</h1>
          <p className="text-gray-600 mt-2">美味しいお菓子の一覧</p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* フィルター・検索エリア */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center lg:justify-between">
            <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                全て
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                ケーキ
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                クッキー
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                その他
              </button>
            </div>
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="お菓子を検索..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
            </div>
          </div>
        </div>

        {/* お菓子一覧グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {mockSnacks.map((snack) => (
            <div
              key={snack.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group w-full max-w-sm"
            >
              {/* 商品画像 */}
              <div className="relative overflow-hidden">
                <img
                  src={snack.image}
                  alt={snack.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {snack.category}
                  </span>
                </div>
              </div>

              {/* 商品情報 */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{snack.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{snack.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">¥{snack.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    詳細を見る
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* もっと見るボタン */}
        <div className="text-center mt-12">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
            もっと見る
          </button>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 お菓子とりこ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
