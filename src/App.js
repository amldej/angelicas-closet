import React from 'react';
import ItemList from './ItemList';
import PinnedItems from './PinnedItems'
import SearchBox from './SearchBox';
import { items } from './items';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pinned: [],
      items: items,
      searchfield: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value })
  }

   render() {
    const handlePin = (id) => {
      const pinnedItems1 = items.filter(items => {return items.id === id})
        this.setState((state) => {return { pinned: state.pinned.concat(pinnedItems1)}})
          const hidePinned = this.state.items.filter(items => items.id !== id)
            this.setState({ items: hidePinned })
    }

    const handleUnpin = (id) => {
      const unpinnedItems1 = this.state.pinned.filter(items => {return items.id !== id})
        this.setState({pinned: unpinnedItems1})
          const addUnpinned = this.state.pinned.filter(items => items.id === id)
            this.setState((state) => {return { items: state.items.concat(addUnpinned)}})
    }

    const handleDelete = (id) => {
      const hiddenItems = this.state.items.filter(items => items.id !== id)
        this.setState({ items: hiddenItems })
    }

    const filteredItems = this.state.items.filter(objs =>{
      return objs.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });

    return (
      <div className='tc'>
        <h1 className='georgia'>angelica's closet</h1>
        <SearchBox searchChangeprop={this.onSearchChange}/>
        <PinnedItems pinneditems={this.state.pinned} handleUnpin={handleUnpin} />
        <ItemList itemsprop={filteredItems} handleDelete={handleDelete} handlePin={handlePin}/>
      </div>
    );
  }
}

export default App;
