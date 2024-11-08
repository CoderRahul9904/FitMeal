
import Header from './Header'
import SearchRecipeBox from './SearchRecipeBox'
function HeroContainer() {
  return (
    <div className=' flex flex-col gap-20 w-screen'>
      <Header />
      <SearchRecipeBox />
    </div>

  )
}

export default HeroContainer