const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.root_node = null;
  }
  root() {
    return this.root_node;
  }

  add(data) {
    if (this.root_node === null) {
      this.root_node = { left: null, right: null, data: data, parent: null };
    } else {
      let node_found = false;
      let cur_node = this.root_node;
      while (!node_found) {
        if (cur_node.data < data) {
          if (cur_node.right === null) {
            cur_node.right = {
              left: null,
              right: null,
              data: data,
              parent: cur_node,
            };
            node_found = true;
          }
          cur_node = cur_node.right;
        } else if (cur_node.data > data) {
          if (cur_node.left === null) {
            cur_node.left = {
              left: null,
              right: null,
              data: data,
              parent: cur_node,
            };
            node_found = true;
          }
          cur_node = cur_node.left;
        } else {
          node_found = true;
        }
      }
    }
  }

  has(data) {
    if (this.root_node === null) {
      return false;
    }
    let cur_node = this.root_node;
    while (1) {
      if (cur_node.data < data) {
        if (cur_node.right === null) {
          return false;
        }
        cur_node = cur_node.right;
      } else if (cur_node.data > data) {
        if (cur_node.left === null) {
          return false;
        }
        cur_node = cur_node.left;
      } else {
        return true;
      }
    }
  }

  find(data) {
    if (this.root_node === null) {
      return null;
    }
    let cur_node = this.root_node;
    while (1) {
      if (cur_node.data < data) {
        if (cur_node.right === null) {
          return null;
        }
        cur_node = cur_node.right;
      } else if (cur_node.data > data) {
        if (cur_node.left === null) {
          return null;
        }
        cur_node = cur_node.left;
      } else {
        return cur_node;
      }
    }
  }

  remove(data) {
    let removed_node = this.find(data);
    if (removed_node === null) return;
    if (removed_node.parent) {
      if (removed_node.parent.left === removed_node) {
        removed_node.parent.left = null;
      } else if (removed_node.parent.right === removed_node) {
        removed_node.parent.right = null;
      }
    } else {
      this.root_node = null;
    }
    let subtree_data = [];
    const collect_subtree_data = function (node) {
      if (node === null) return;
      subtree_data.push(node.data);
      if (node.left) {
        collect_subtree_data(node.left);
      }
      if (node.right) {
        collect_subtree_data(node.right);
      }
    };
    collect_subtree_data(removed_node.left);
    collect_subtree_data(removed_node.right);
    subtree_data.forEach((data) => {
      this.add(data);
    });
  }

  min() {
    if (this.root_node === null) {
      return undefined;
    }
    let cur_node = this.root_node;
    while (cur_node.left) {
      cur_node = cur_node.left;
    }
    return cur_node.data;
  }

  max() {
    if (this.root_node === null) {
      return undefined;
    }
    let cur_node = this.root_node;
    while (cur_node.right) {
      cur_node = cur_node.right;
    }
    return cur_node.data;
  }
}

module.exports = {
  BinarySearchTree
};
