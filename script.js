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


const treeSum = (root) => {
  //   recursive solution
    if(root === null) return 0
    
    let sumOfTrees = root.val + (treeSum(root.left) + treeSum(root.right))
    return sumOfTrees
  };



