export default function cleanSchema (suppliedSchema) {
  const removeWb3Header = suppliedSchema.split('### Web3API Header END ###\n\n')[1]
  const removeObjects = removeWb3Header.split('\n\n### Imported Queries END ###')[0]
  const localandimported = removeObjects.split('\n### Imported Queries START ###\n\n')
  
  const local = localandimported[0].split('\n\n')
  const imported = localandimported[1].split('\n\n')
  
  let localqueries = []
  let localmutations = []
  let localcustom = []
  
  let importedqueries = []
  let importedmutations = []
  
  local.map((func) => {
    if (func.includes('type Query')) {
      localqueries.push(func)
    }
    if (func.includes('type Mutation')) {
      localmutations.push(func)
    }
    if (!func.includes('type Mutation') && !func.includes('type Query')) {
      localcustom.push(func)
    }
  })
  
  imported.map((func) => {
    if (func.includes('type Ethereum_Query')) {
      importedqueries.push(func)
    }
    if (func.includes('type Ethereum_Mutation')) {
      importedmutations.push(func)
    }
  })
  
  return {
    localqueries:localqueries,
    localmutations: localmutations,
    localcustom: localcustom,
    importedqueries: importedqueries,
    importedmutations: importedmutations,
  }
}