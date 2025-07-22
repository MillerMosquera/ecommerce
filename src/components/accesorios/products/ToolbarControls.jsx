import { Grid, List } from 'lucide-react';

export const ToolbarControls = ({ 
  productsCount, 
  sortBy, 
  setSortBy, 
  viewMode, 
  setViewMode 
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="text-sm text-gray-500">
        {productsCount} Productos
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Ordenar Por:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-300 rounded px-2 py-1"
          >
            <option value="RELEVANCE">Relevancia</option>
            <option value="PRICE_LOW">Precio: Bajo a Alto</option>
            <option value="PRICE_HIGH">Precio: Alto a Bajo</option>
            <option value="RATING">Calificación</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolbarControls;