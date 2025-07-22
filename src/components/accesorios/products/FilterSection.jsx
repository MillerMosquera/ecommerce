import { ChevronDown } from 'lucide-react';

export const FilterSection = ({ 
  title, 
  items, 
  filterType, 
  selectedItems, 
  expandedFilters, 
  toggleFilter, 
  toggleFilterExpansion 
}) => (
  <div className="mb-6">
    <div 
      className="flex items-center justify-between cursor-pointer py-2"
      onClick={() => toggleFilterExpansion(filterType)}
    >
      <h3 className="font-medium text-gray-900">{title}</h3>
      <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilters[filterType] ? 'rotate-180' : ''}`} />
    </div>
    {expandedFilters[filterType] && (
      <div className="space-y-2 mt-2">
        {items.map(item => (
          <label key={item} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => toggleFilter(filterType, item)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{item}</span>
          </label>
        ))}
      </div>
    )}
  </div>
);

export default FilterSection;