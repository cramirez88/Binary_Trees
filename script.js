// const depthFirstValues = (root) => {
//   if(!root) return []
//   let stack = [ root ]
//   let newArr = []
//   while(stack.length > 0){
//     let node = stack.pop()
//     newArr.push(node.val)
//     if(node.right !== null) stack.push(node.right)
//     if(node.left !== null) stack.push(node.left)
//   }
//   return newArr
// };

// const breadthFirstValues = (root) => {
//   if(!root) return []
//   let queue = [root]
//   let newArr =[]
//   while(queue.length > 0){
//     let node = queue.shift()
//     newArr.push(node.val)
    
//     if(node.left !== null) queue.push(node.left)
//     if(node.right !== null) queue.push(node.right)
//   }
//   return newArr
// };



// const treeSum = (root) => {
//   if(!root) return 0
//   let queue = [root]
//   let sum = 0
//   while(queue.length > 0){
//     let node = queue.shift()
//     sum += node.val
    
//     if(node.left !== null) queue.push(node.left)
//     if(node.right !== null) queue.push(node.right)
//   }
//   return sum
// };

// const treeIncludes = (root, target) => {
//   if(!root) return false
//   let queue = [root]
//   while(queue.length > 0){
//     let node = queue.shift()
//     if(node.val === target) return true
    
//     if(node.left !== null) queue.push(node.left)
//     if(node.right !== null) queue.push(node.right)
//   }
//   return false
// };


// const treeMinValue = (root) => {
//   let queue = [root]
//   let minValue = root.val
//   while(queue.length > 0){
//     let node = queue.shift()
//     if(node.val < minValue) {
//       minValue = node.val
//     }
//     if(node.left !== null) queue.push(node.left)
//     if(node.right !== null) queue.push(node.right)
//   }
//   return minValue
// };

// if(!root) return -Infinity
//   if(root.right === null && root.left === null) return root.val
//   console.log(root.right, root.left)
//   let nodeSum = Math.max(maxPathSum(root.right), maxPathSum(root.left))
//   console.log(root.val + nodeSum)
//   return root.val + nodeSum

// const pathFinder = (root, target) => {
//   if(!root) return null
//   if(root.val === target) return [root.val]
  
//   let leftPath = pathFinder(root.left, target)
//   console.log(leftPath)
//   if(leftPath !== null) {
//     console.log(leftPath)
//     return [root.val, ...leftPath]
//   }
  
//   let rightPath = pathFinder(root.right, target)
//     if(rightPath !== null){
//       return [root.val, ...rightPath]
//     }
  
//   return null

// };

// const treeValueCount = (root, target) => {
//   if(!root) return 0
//   let total = root.val === target ? 1 : 0
//   return total + treeValueCount(root.left, target) + treeValueCount(root.right, target)
// };


// const treeSum = (root) => {
//   //   recursive solution
//     if(root === null) return 0
    
//     let sumOfTrees = root.val + (treeSum(root.left) + treeSum(root.right))
//     return sumOfTrees
//   };


// const treeIncludes = (root, target) => {
//   if(!root) return false
//   if(root.val === target) return true
  
  
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target)
// };

// const treeMinValue = (root) => {
//   //   recursive solution
//     if(root === null) return Infinity
//     return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right))
    
//   };


// const maxPathSum = (root) => {
//   if(!root) return -Infinity
//   if(root.left === null && root.right === null) return root.val
//   return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right))
// };

// const pathFinder = (root, target) => {
//   if(!root) return null
//   if(root.val === target) return [root.val]
  
//   let leftPath = pathFinder(root.left, target)
//   let rightPath = pathFinder(root.right, target)
  
//   if(leftPath !== null) return [root.val, ...leftPath]
//   if(rightPath !== null) return [root.val, ...rightPath]
  
//   return null
  
// };


// const treeValueCount = (root, target) => {
//   if(!root) return 0
//   let total = root.val === target? 1: 0
//   return total + treeValueCount(root.left, target) + treeValueCount(root.right, target)

// };





// const howHigh = (node) => {
//   if(!node) return -1
//   return 1 + Math.max(howHigh(node.left), howHigh(node.right))
// };


// const bottomRightValue = (root) => {
//   let queue = [root]
//   if(!root) return null
//   let highestVal = null
//   while(queue.length > 0){
//    highestVal = queue.shift()
//     if(highestVal.left !== null) queue.push(highestVal.left)
//     if(highestVal.right !== null) queue.push(highestVal.right)
    
//   }
  
//   return highestVal.val
// };



// const allTreePaths = (root) => {
//   if(!root) return []
//   if(root.left === null && root.right === null) return [[root.val]]
  
//   const arrayOfArrays = []
  
//   let leftSide = allTreePaths(root.left)
//       for(let left of leftSide){
//         arrayOfArrays.push([root.val, ...left])
//       }
//   let rightSide = allTreePaths(root.right)
//       for(let right of rightSide){
//         arrayOfArrays.push([root.val, ...right])
//       }
  
//   return arrayOfArrays
// };

// const treeLevels = (root) => {
//   if(!root) return []
//   let arrayOfArrays = []
//   let queue = [{node: root, level: 0}]
  
//   while(queue.length > 0){
//     const {node, level} = queue.shift()
//     if(arrayOfArrays.length === level){
//       arrayOfArrays[level] = [node.val]
//     }else {
//       arrayOfArrays[level].push(node.val)
//     }
//     if(node.left !== null) queue.push({node: node.left, level: level + 1})
//     if(node.right !== null) queue.push({node: node.right, level: level + 1})
//   }
//   return arrayOfArrays
// };


const levelAverages = (root) => {
  if(!root) return []
  let queue = [{node: root, level: 0}]
  let arrays = []
  let averages = []
  
//   subArrays for each level
  while(queue.length > 0){
    const {node, level} = queue.shift()
    if(arrays.length === level){
      arrays[level] = [node.val]
    }else {
      arrays[level].push(node.val)
    }
    if(node.left !== null) queue.push({node: node.left, level: level + 1})
    if(node.right !== null) queue.push({node: node.right, level: level + 1})
  }
  
//   average of subArray 
  const getAvg = (array) => {
    let sum = 0
    for(const avg of array){
      sum += avg 
    }
    return sum / array.length
  }
  
  for(const arr of arrays){
    averages.push(getAvg(arr))
  }
  return averages
  
  }