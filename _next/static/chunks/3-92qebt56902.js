(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1065,e=>{"use strict";var t=e.i(37470),r=e.i(97873);let n=(0,r.default)("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]),a=(0,r.default)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]),i=(0,r.default)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),s=(0,r.default)("step-forward",[["path",{d:"M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"1ystz2"}],["path",{d:"M3 4v16",key:"1ph11n"}]]);var o=e.i(84629);let l=[{a:[5,3,8,4,2],active:[0,1],fixed:[],note:"Compare 5 and 3. They are in the wrong order."},{a:[3,5,8,4,2],active:[1,2],fixed:[],note:"Swap. Now compare 5 and 8—already correct."},{a:[3,5,8,4,2],active:[2,3],fixed:[],note:"8 is larger than 4, so swap them."},{a:[3,5,4,8,2],active:[3,4],fixed:[],note:"8 is larger than 2, so swap again."},{a:[3,5,4,2,8],active:[],fixed:[4],note:"Pass complete: 8 is fixed. The next pass can ignore it."}];e.s(["AlgorithmPlayer",0,function(){let[e,r]=(0,o.useState)(0),[d,c]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(!d)return;let e=setInterval(()=>r(e=>e===l.length-1?(c(!1),e):e+1),1100);return()=>clearInterval(e)},[d]);let h=l[e];return(0,t.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-border bg-[#091513]",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b border-border px-5 py-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-semibold",children:"Pointer movement"}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:"Bubble Sort · Pass 1"})]}),(0,t.jsxs)("span",{className:"font-mono text-xs text-primary",children:[e+1," / ",l.length]})]}),(0,t.jsx)("div",{className:"grid min-h-64 place-items-center p-6",children:(0,t.jsxs)("div",{className:"w-full max-w-lg",children:[(0,t.jsx)("div",{className:"flex items-end justify-center gap-2 sm:gap-4",children:h.a.map((e,r)=>(0,t.jsxs)("div",{className:"flex flex-1 flex-col items-center gap-2",children:[(0,t.jsx)("div",{className:`flex w-full max-w-16 items-end justify-center rounded-t-lg border transition-all duration-500 ${h.active.includes(r)?"border-primary bg-primary/25 text-primary":h.fixed.includes(r)?"border-[#55d6be] bg-[#55d6be]/20 text-[#7cebd5]":"border-border bg-secondary text-foreground"}`,style:{height:48+10*e},children:(0,t.jsx)("span",{className:"mb-2 font-mono font-bold",children:e})}),(0,t.jsx)("span",{className:"font-mono text-xs text-muted-foreground",children:r})]},r))}),(0,t.jsx)("p",{"aria-live":"polite",className:"mt-7 min-h-14 text-center leading-6 text-[#c4cfca]",children:h.note})]})}),(0,t.jsxs)("div",{className:"flex items-center justify-between border-t border-border bg-card/70 px-5 py-3",children:[(0,t.jsx)("button",{type:"button",onClick:()=>{r(0),c(!1)},"aria-label":"Restart",className:"rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground",children:(0,t.jsx)(i,{size:18})}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)("button",{type:"button",onClick:()=>{d?c(!1):(r(e=>e===l.length-1?0:e+1),c(!0))},className:"flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",children:[d?(0,t.jsx)(n,{size:16}):(0,t.jsx)(a,{size:16})," ",d?"Pause":"Play"]}),(0,t.jsx)("button",{type:"button",onClick:()=>{c(!1),r(e=>(e+1)%l.length)},className:"rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground","aria-label":"Next step",children:(0,t.jsx)(s,{size:18})})]})]})]})}],1065)},46023,e=>{"use strict";var t=e.i(37470),r=e.i(97873);let n=(0,r.default)("arrow-up-right",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),a=(0,r.default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);var i=e.i(84629);let s=(e,t,r,n,a,i,s,o,l,d,c,h,u,p)=>({slug:e,name:t,category:r,level:n,icon:a,oneLiner:i,analogy:s,triggers:o,steps:l,complexity:d,java:c,explain:h,pitfalls:u,problems:p}),o=[s("bubble-sort","Bubble Sort","Foundations","Start here","↕","Compare neighbors; the largest unsorted value bubbles right.","People swapping places until the taller person moves to the end.",["basic sorting","adjacent swaps","nearly sorted"],["Start at index 0.","Compare arr[j] with arr[j+1].","Swap when left is larger.","After one pass, ignore the fixed last element.","Stop early if a full pass makes no swap."],{best:"O(n)",average:"O(n²)",worst:"O(n²)",space:"O(1)"},`static void bubbleSort(int[] a) {
  for (int end = a.length - 1; end > 0; end--) {
    boolean swapped = false;
    for (int j = 0; j < end; j++) {
      if (a[j] > a[j + 1]) {
        int t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}`,"I compare adjacent values and swap inversions. Each pass fixes the largest remaining value at the right, so the unchecked range shrinks.",["Forgetting j < end","Claiming O(n) best case without the swapped flag"],["Sort an Array","Sort Colors (concept bridge)"]),s("selection-sort","Selection Sort","Foundations","Start here","⌄","Select the smallest remaining value and lock it into place.","Choosing the shortest person from a line for the next seat.",["minimum each pass","few writes","simple in-place sort"],["Treat the left side as sorted.","Scan the unsorted side for its minimum.","Swap that minimum into the first unsorted position.","Move the boundary right."],{best:"O(n²)",average:"O(n²)",worst:"O(n²)",space:"O(1)"},`static void selectionSort(int[] a) {
  for (int i = 0; i < a.length - 1; i++) {
    int min = i;
    for (int j = i + 1; j < a.length; j++)
      if (a[j] < a[min]) min = j;
    int t = a[i]; a[i] = a[min]; a[min] = t;
  }
}`,"I maintain a sorted prefix. For each position, I scan the remainder, select its minimum, and place it at the boundary.",["Swapping inside the inner loop","Calling it stable; the usual version is not"],["Sort an Array","Kth Smallest Element (concept bridge)"]),s("insertion-sort","Insertion Sort","Foundations","Start here","↪","Grow a sorted left side by inserting one value at a time.","Sorting cards in your hand.",["nearly sorted","small input","online input"],["Save the current key.","Shift larger values one place right.","Stop at the first smaller value.","Insert the key into the gap."],{best:"O(n)",average:"O(n²)",worst:"O(n²)",space:"O(1)"},`static void insertionSort(int[] a) {
  for (int i = 1; i < a.length; i++) {
    int key = a[i], j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j--];
    }
    a[j + 1] = key;
  }
}`,"The prefix before i is already sorted. I save the current value, shift every larger prefix value right, then insert into the gap.",["Overwriting key before saving it","Swapping repeatedly instead of shifting"],["Sort List (concept bridge)","Insertion Sort List"]),s("merge-sort","Merge Sort","Foundations","Core","⋈","Split until trivial, then merge small sorted answers.","Sorting two small piles, then zipping them together.",["guaranteed n log n","stable sort","divide and conquer"],["Split at the middle.","Recursively sort both halves.","Compare the two front values.","Copy the smaller one.","Append leftovers."],{best:"O(n log n)",average:"O(n log n)",worst:"O(n log n)",space:"O(n)"},`static void mergeSort(int[] a, int l, int r) {
  if (l >= r) return;
  int m = l + (r - l) / 2;
  mergeSort(a, l, m); mergeSort(a, m + 1, r);
  int[] t = new int[r - l + 1]; int i=l,j=m+1,k=0;
  while(i<=m && j<=r) t[k++] = a[i] <= a[j] ? a[i++] : a[j++];
  while(i<=m) t[k++]=a[i++]; while(j<=r) t[k++]=a[j++];
  for(i=0;i<t.length;i++) a[l+i]=t[i];
}`,"I divide the array into halves until each piece is sorted by definition. Merging costs linear time per level, across log n levels.",["Forgetting leftover elements","Using O(1) space in the complexity claim"],["Sort an Array","Count Inversions"]),s("quick-sort","Quick Sort","Foundations","Core","◆","Place a pivot correctly, then repeat on both sides.","A bouncer sends smaller numbers left and larger numbers right.",["in-place average n log n","partition","pivot"],["Choose a pivot.","Partition values relative to it.","Pivot lands in its final position.","Recurse left and right."],{best:"O(n log n)",average:"O(n log n)",worst:"O(n²)",space:"O(log n) average"},`static void quickSort(int[] a, int lo, int hi) {
  if (lo >= hi) return;
  int pivot=a[hi], i=lo;
  for(int j=lo;j<hi;j++) if(a[j]<=pivot) {
    int t=a[i];a[i++]=a[j];a[j]=t;
  }
  int t=a[i];a[i]=a[hi];a[hi]=t;
  quickSort(a,lo,i-1); quickSort(a,i+1,hi);
}`,"Partitioning establishes one useful truth: everything left of the pivot is smaller and everything right is larger. Then I solve the two smaller ranges.",["Poor pivot choices can create O(n²)","Confusing partition index with pivot value"],["Sort an Array","Kth Largest via Quickselect"]),s("binary-search","Binary Search","Core Patterns","Core","½","Use sorted order to discard half the possibilities.","Opening a dictionary near the middle instead of page one.",["sorted","first or last occurrence","minimum feasible","search range"],["Set left and right boundaries.","Compute overflow-safe mid.","Compare mid with the target.","Discard the impossible half.","Continue while left <= right."],{best:"O(1)",average:"O(log n)",worst:"O(log n)",space:"O(1)"},`static int search(int[] a, int target) {
  int left=0, right=a.length-1;
  while(left<=right) {
    int mid=left+(right-left)/2;
    if(a[mid]==target) return mid;
    if(a[mid]<target) left=mid+1; else right=mid-1;
  }
  return -1;
}`,"Because the search space is ordered, one comparison proves that half of the remaining values cannot be the answer.",["Using left < right with the wrong boundary update","mid = (left + right) / 2 can overflow"],["Binary Search","Search in Rotated Sorted Array","Find First and Last Position"]),s("hashing","HashMap & HashSet","Core Patterns","Core","#","Trade extra memory for near-constant lookup.","Keep a labeled drawer so you never search the whole room again.",["seen before","frequency","duplicate","complement","grouping"],["Traverse once.","Compute what information is needed.","Check the map or set.","Use the stored answer or save current information."],{best:"O(n) total",average:"O(n) total",worst:"O(n²) pathological",space:"O(n)"},`static int[] twoSum(int[] a, int target) {
  Map<Integer,Integer> seen = new HashMap<>();
  for(int i=0;i<a.length;i++) {
    int need=target-a[i];
    if(seen.containsKey(need)) return new int[]{seen.get(need),i};
    seen.put(a[i],i);
  }
  return new int[0];
}`,"For each value I know its required complement. A HashMap remembers earlier values, removing the inner loop and reducing expected time from O(n²) to O(n).",["Storing before checking can reuse the same index","Hash lookup is O(1) average, not guaranteed"],["Two Sum","Valid Anagram","Group Anagrams","Longest Consecutive Sequence"]),s("two-pointers","Two Pointers","Core Patterns","Core","⇥⇤","Move two indexes using information from their combined state.","Two people close in from opposite ends.",["sorted pair","palindrome","remove duplicates","in-place partition"],["Place pointers at useful boundaries.","Evaluate their combined state.","Move only the pointer that can improve it.","Stop when they meet or cross."],{best:"O(n)",average:"O(n)",worst:"O(n)",space:"O(1)"},`static boolean hasPair(int[] a, int target) {
  int l=0,r=a.length-1;
  while(l<r) {
    int sum=a[l]+a[r];
    if(sum==target) return true;
    if(sum<target) l++; else r--;
  }
  return false;
}`,"Sorted order tells me which pointer to move: a small sum needs a larger left value; a large sum needs a smaller right value.",["Requires a reason pointer movement is safe","Sorting first may change indexes and cost O(n log n)"],["Valid Palindrome","3Sum","Container With Most Water","Remove Duplicates"]),s("sliding-window","Sliding Window","Core Patterns","Core","▭","Reuse work while a contiguous range expands or moves.","A camera frame slides across the array.",["substring","subarray","consecutive","longest or shortest"],["Expand right to include data.","Update the window state.","While invalid, remove from the left.","Record the best valid window."],{best:"O(n)",average:"O(n)",worst:"O(n)",space:"O(k)"},`static int longestUnique(String s) {
  Set<Character> set=new HashSet<>(); int left=0,best=0;
  for(int right=0;right<s.length();right++) {
    while(set.contains(s.charAt(right)))
      set.remove(s.charAt(left++));
    set.add(s.charAt(right));
    best=Math.max(best,right-left+1);
  }
  return best;
}`,"The window always represents the current valid substring. Every character enters once and leaves at most once, so the two loops are still O(n).",["Using it for non-contiguous subsequences","Not defining exactly when the window is valid"],["Longest Substring Without Repeating Characters","Minimum Window Substring","Max Consecutive Ones III"]),s("prefix-sum","Prefix Sum","Core Patterns","Core","Σ","Pay once for cumulative totals; answer ranges by subtraction.","A running bank balance lets you calculate spending between dates.",["range sum","subarray sum","many queries","balance counts"],["Build prefix[i+1] as sum through i.","For [L,R], subtract prefix[L] from prefix[R+1].","Combine prefix values with a HashMap for target sums."],{best:"O(n) build, O(1) query",average:"O(n)",worst:"O(n)",space:"O(n)"},`static int rangeSum(int[] prefix, int left, int right) {
  return prefix[right + 1] - prefix[left];
}
static int[] prefix(int[] a) {
  int[] p=new int[a.length+1];
  for(int i=0;i<a.length;i++) p[i+1]=p[i]+a[i];
  return p;
}`,"A range sum contains two prefixes. Subtracting the part before L leaves exactly the values from L through R.",["Off-by-one errors","Prefix sums can overflow int for large values"],["Range Sum Query","Subarray Sum Equals K","Product of Array Except Self"]),s("stack","Stack","Data Structures","Core","▤","The most recent unfinished item must be handled first.","A pile of plates: the last placed is the first removed.",["matching brackets","undo","nested expression","previous item"],["Push unfinished/opening items.","On a closing event, inspect the top.","Pop when it matches.","At the end, verify nothing remains."],{best:"O(n)",average:"O(n)",worst:"O(n)",space:"O(n)"},`static boolean valid(String s) {
  Deque<Character> st=new ArrayDeque<>();
  for(char c:s.toCharArray()) {
    if(c=='(') st.push(')');
    else if(c=='[') st.push(']');
    else if(c=='{') st.push('}');
    else if(st.isEmpty() || st.pop()!=c) return false;
  }
  return st.isEmpty();
}`,"The stack remembers the expected closing bracket for the latest unfinished opening bracket, which is exactly the required nesting order.",["Using Stack instead of ArrayDeque in modern Java","Forgetting the final empty check"],["Valid Parentheses","Min Stack","Evaluate Reverse Polish Notation"]),s("monotonic-stack","Monotonic Stack","Data Structures","Interview","↗","Keep only candidates still waiting for a greater or smaller answer.","People wait in line until someone taller arrives.",["next greater","previous smaller","temperatures","histogram"],["Traverse once.","While current resolves the stack top, pop it.","Write the popped item's answer.","Push current as an unresolved candidate."],{best:"O(n)",average:"O(n)",worst:"O(n)",space:"O(n)"},`static int[] dailyTemperatures(int[] t) {
  int[] ans=new int[t.length]; Deque<Integer> st=new ArrayDeque<>();
  for(int i=0;i<t.length;i++) {
    while(!st.isEmpty() && t[i]>t[st.peek()]) {
      int j=st.pop(); ans[j]=i-j;
    }
    st.push(i);
  }
  return ans;
}`,"The stack stores unresolved indexes in decreasing temperature order. Each index is pushed and popped once, making the whole scan O(n).",["Store indexes when distance is needed","Nested while does not mean O(n²) here"],["Daily Temperatures","Next Greater Element","Largest Rectangle in Histogram"]),s("linked-list","Linked List Pointers","Data Structures","Core","⛓","Change links safely by saving what would otherwise be lost.","Redirecting train-car couplings one at a time.",["reverse list","merge nodes","reorder","delete node"],["Save next before changing current.next.","Redirect the link.","Move previous and current forward.","Use a dummy node when the head may change."],{best:"O(n)",average:"O(n)",worst:"O(n)",space:"O(1)"},`static ListNode reverse(ListNode head) {
  ListNode prev=null, cur=head;
  while(cur!=null) {
    ListNode next=cur.next;
    cur.next=prev;
    prev=cur; cur=next;
  }
  return prev;
}`,"I save the next node before reversing the current link. Then I move both pointers forward; previous becomes the new head.",["Losing the remainder by reversing before saving next","Returning head instead of prev"],["Reverse Linked List","Merge Two Sorted Lists","Reorder List"]),s("fast-slow","Fast & Slow Pointers","Core Patterns","Core","»","Different pointer speeds reveal hidden structure without extra memory.","A faster runner laps a slower runner on a circular track.",["cycle","middle","linked-list palindrome","repeated state"],["Move slow by one.","Move fast by two.","If fast ends, slow is at the middle.","If they meet, a cycle exists."],{best:"O(n)",average:"O(n)",worst:"O(n)",space:"O(1)"},`static boolean hasCycle(ListNode head) {
  ListNode slow=head, fast=head;
  while(fast!=null && fast.next!=null) {
    slow=slow.next; fast=fast.next.next;
    if(slow==fast) return true;
  }
  return false;
}`,"If a cycle exists, the faster pointer must eventually close the distance and meet the slower one. Without a cycle, fast reaches null.",["Checking values instead of node identity","Missing fast.next null guard"],["Linked List Cycle","Middle of the Linked List","Happy Number"]),s("trees-dfs","Trees & DFS","Data Structures","Core","⌘","Solve a node using answers from its children.","Walk one branch to its end, return, then try the next.",["tree path","subtree","height","validate BST","recursive structure"],["Define what the function returns for one node.","Handle null as the base case.","Ask left and right children for answers.","Combine them with the current node."],{best:"O(n)",average:"O(n)",worst:"O(n)",space:"O(h)"},`static int maxDepth(TreeNode root) {
  if(root==null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`,"For each node, I ask both children for their maximum depth. The current answer is one plus the larger child answer.",["Not stating whether space is O(log n) or O(n) based on height","For BST problems, preserve bound invariants"],["Maximum Depth","Diameter of Binary Tree","Validate BST","Lowest Common Ancestor"]),s("bfs","BFS & Queue","Data Structures","Core","≋","Visit all positions at distance d before distance d+1.","Ripples expand outward from a stone dropped in water.",["minimum steps","shortest unweighted path","level order","nearest"],["Add the start to a queue.","Mark it visited immediately.","Process one level.","Add valid unvisited neighbors.","Count levels until the target."],{best:"O(V+E)",average:"O(V+E)",worst:"O(V+E)",space:"O(V)"},`static void bfs(List<List<Integer>> g, int start) {
  Queue<Integer> q=new ArrayDeque<>(); boolean[] seen=new boolean[g.size()];
  q.offer(start); seen[start]=true;
  while(!q.isEmpty()) {
    int node=q.poll();
    for(int next:g.get(node)) if(!seen[next]) {
      seen[next]=true; q.offer(next);
    }
  }
}`,"BFS processes the graph in distance layers. Therefore the first time it reaches a node in an unweighted graph is through the fewest edges.",["Mark visited when enqueueing, not dequeueing","BFS is not enough for arbitrary weighted edges"],["Binary Tree Level Order","Rotting Oranges","Word Ladder"]),s("heap","Heap / PriorityQueue","Data Structures","Core","△","Keep quick access to one extreme without sorting everything.","A priority lane always serves the most urgent item next.",["top K","kth largest","merge sorted","scheduling"],["Choose min-heap or max-heap.","Insert candidates.","Remove the root when size exceeds K.","The root becomes the Kth boundary."],{best:"O(n log k)",average:"O(n log k)",worst:"O(n log k)",space:"O(k)"},`static int kthLargest(int[] a, int k) {
  PriorityQueue<Integer> pq=new PriorityQueue<>();
  for(int x:a) {
    pq.offer(x);
    if(pq.size()>k) pq.poll();
  }
  return pq.peek();
}`,"A min-heap of size k keeps only the k largest values seen. Its smallest value is therefore the kth largest overall.",["Reversing heap direction","Sorting all n items when only k matter"],["Kth Largest Element","Top K Frequent Elements","Merge K Sorted Lists"]),s("graph-dfs","Graphs & Components","Data Structures","Core","◎","Model things as nodes and relationships as edges, then mark what you visit.","Explore every room connected by doors before choosing a new building.",["connected","islands","reachable","components","cycle"],["Build or infer neighbors.","For every unvisited node, start DFS/BFS.","Mark before exploring.","Each new start represents a new component."],{best:"O(V+E)",average:"O(V+E)",worst:"O(V+E)",space:"O(V)"},`static void dfs(int u, List<List<Integer>> g, boolean[] seen) {
  seen[u]=true;
  for(int v:g.get(u)) if(!seen[v]) dfs(v,g,seen);
}`,"Visited prevents repeated work and infinite cycles. One traversal consumes exactly one connected component.",["Forgetting directed versus undirected behavior","Not marking visited before recursion"],["Number of Islands","Clone Graph","Number of Provinces"]),s("topological-sort","Topological Sort","Advanced","Interview","⇢","Process dependency-free work first, then unlock what depends on it.","Complete prerequisite courses before advanced courses.",["prerequisite","dependency","valid ordering","build order"],["Count every node's incoming dependencies.","Queue nodes with indegree zero.","Process one and reduce neighbors' indegrees.","If processed count is short, a cycle exists."],{best:"O(V+E)",average:"O(V+E)",worst:"O(V+E)",space:"O(V+E)"},`static int[] topo(int n, int[][] edges) {
  List<List<Integer>> g=new ArrayList<>(); for(int i=0;i<n;i++) g.add(new ArrayList<>());
  int[] in=new int[n]; for(int[] e:edges){g.get(e[0]).add(e[1]);in[e[1]]++;}
  Queue<Integer> q=new ArrayDeque<>(); for(int i=0;i<n;i++) if(in[i]==0) q.offer(i);
  int[] order=new int[n]; int k=0;
  while(!q.isEmpty()){int u=q.poll();order[k++]=u;for(int v:g.get(u))if(--in[v]==0)q.offer(v);}
  return k==n?order:new int[0];
}`,"Indegree counts unfinished prerequisites. A zero-indegree node is safe now; removing it may make more work safe.",["Edge direction confusion","A DAG is required for a complete ordering"],["Course Schedule","Course Schedule II","Alien Dictionary"]),s("union-find","Union Find","Advanced","Interview","∪","Maintain groups and quickly ask whether two items share a leader.","Friend circles merge when two people connect.",["dynamic connectivity","groups","redundant edge","minimum spanning tree"],["Every node starts as its own parent.","Find follows parents to a root.","Union connects two roots.","Compress paths and rank by size."],{best:"O(α(n)) amortized",average:"O(α(n))",worst:"O(α(n)) amortized",space:"O(n)"},`class DSU {
  int[] p,size;
  DSU(int n){p=new int[n];size=new int[n];for(int i=0;i<n;i++){p[i]=i;size[i]=1;}}
  int find(int x){return p[x]==x?x:(p[x]=find(p[x]));}
  boolean union(int a,int b){a=find(a);b=find(b);if(a==b)return false;
    if(size[a]<size[b]){int t=a;a=b;b=t;} p[b]=a;size[a]+=size[b];return true;}
}`,"Each component has a representative root. Path compression and union by size keep the trees nearly flat.",["Union original nodes instead of roots","Omitting both compression and ranking"],["Redundant Connection","Accounts Merge","Number of Connected Components"]),s("backtracking","Backtracking","Advanced","Interview","↩","Choose, explore, undo—systematically try every valid path.","Try a key; if it fails, return it and try the next.",["all combinations","permutations","board search","constraints"],["Choose one candidate.","Add it to current state.","Recurse to explore.","Undo exactly that choice.","Try the next candidate."],{best:"Exponential",average:"Exponential",worst:"O(b^d)",space:"O(d)"},`static void subsets(int[] a, int i, List<Integer> cur, List<List<Integer>> out) {
  if(i==a.length){out.add(new ArrayList<>(cur));return;}
  cur.add(a[i]); subsets(a,i+1,cur,out);
  cur.remove(cur.size()-1); subsets(a,i+1,cur,out);
}`,"The recursion tree represents decisions. Undo restores the exact state expected by sibling branches.",["Adding cur directly instead of copying it","Forgetting to undo mutable state"],["Subsets","Permutations","Combination Sum","N-Queens"]),s("intervals","Intervals","Core Patterns","Interview","▰","Sort first so overlap becomes a local comparison.","Arrange appointments by start time before resolving clashes.",["overlap","meeting","schedule","range merge"],["Sort by start time.","Keep the current merged interval.","If next.start <= current.end, extend.","Otherwise, output current and start a new one."],{best:"O(n log n)",average:"O(n log n)",worst:"O(n log n)",space:"O(n)"},`static int[][] merge(int[][] a) {
  Arrays.sort(a, Comparator.comparingInt(x -> x[0]));
  List<int[]> out=new ArrayList<>();
  for(int[] x:a) {
    if(out.isEmpty() || out.get(out.size()-1)[1] < x[0]) out.add(x);
    else out.get(out.size()-1)[1]=Math.max(out.get(out.size()-1)[1],x[1]);
  }
  return out.toArray(new int[out.size()][]);
}`,"Sorting by start makes every possible overlap touch the current merged interval, so one scan is enough after sorting.",["Wrong strictness at touching endpoints","Forgetting sorting dominates runtime"],["Merge Intervals","Insert Interval","Meeting Rooms II"]),s("greedy","Greedy","Advanced","Interview","✓","Make a locally safe choice and prove it cannot hurt the final optimum.","Take the earliest-finishing meeting to preserve the most future room.",["minimum removals","maximum count","earliest finish","reachability"],["Define the locally best choice.","State the invariant it preserves.","Use an exchange argument or contradiction.","Scan while maintaining that invariant."],{best:"O(n)",average:"O(n log n) with sort",worst:"O(n log n)",space:"O(1) often"},`static int eraseOverlap(int[][] a) {
  Arrays.sort(a, Comparator.comparingInt(x -> x[1]));
  int kept=0, end=Integer.MIN_VALUE;
  for(int[] x:a) if(x[0]>=end){kept++;end=x[1];}
  return a.length-kept;
}`,"Choosing the interval that ends earliest leaves at least as much space as any other choice, so replacing an optimal choice with mine cannot worsen the answer.",["A greedy-looking choice still needs proof","Sorting by the wrong endpoint"],["Jump Game","Gas Station","Non-overlapping Intervals"]),s("dynamic-programming","Dynamic Programming","Advanced","Interview","◫","Store answers to repeated smaller problems, then combine them.","Write down solved puzzle pieces so you never solve the same piece twice.",["count ways","minimum cost","maximum value","subsequence","repeated subproblem"],["Define dp[state] in one sentence.","List the choices from that state.","Write the recurrence.","Set base cases.","Choose memoization or tabulation and iteration order."],{best:"Varies",average:"states × transitions",worst:"states × transitions",space:"number of states"},`static int rob(int[] a) {
  int skip=0, take=0;
  for(int money:a) {
    int next=Math.max(take, skip+money);
    skip=take; take=next;
  }
  return take;
}`,"At each house the best answer is either the previous best, or the best two houses ago plus this money. Those are the only valid final choices.",["Coding before defining the state","Wrong iteration order overwrites needed states"],["Climbing Stairs","House Robber","Coin Change","Longest Increasing Subsequence"]),s("binary-search-answer","Binary Search on Answer","Advanced","Interview","◇","Search a numeric answer range when feasibility changes only once.","Try a middle speed: if it works, test slower; if not, test faster.",["minimum possible maximum","capacity","speed","days","feasible"],["Define low and high possible answers.","Test the middle answer with a helper.","If feasible, keep it and search smaller.","Otherwise search larger."],{best:"O(n log range)",average:"O(n log range)",worst:"O(n log range)",space:"O(1)"},`static int minSpeed(int[] piles, int hours) {
  int l=1,r=Arrays.stream(piles).max().orElse(1);
  while(l<r){int m=l+(r-l)/2;long used=0;
    for(int p:piles) used+=(p+m-1)/m;
    if(used<=hours) r=m; else l=m+1;
  }
  return l;
}`,"Feasibility is monotonic: once a speed is fast enough, every faster speed also works. That single false-to-true boundary is searchable.",["No monotonic feasibility means no binary search","Integer ceiling and overflow errors"],["Koko Eating Bananas","Capacity to Ship Packages","Split Array Largest Sum"]),s("trie","Trie","Advanced","Interview","T","Share common prefixes for fast word-prefix operations.","Words share the same hallway until their letters split.",["prefix","autocomplete","dictionary","many word searches"],["Start at the root.","Follow or create one child per character.","Mark complete words.","Prefix search succeeds without requiring the word marker."],{best:"O(L)",average:"O(L)",worst:"O(L)",space:"O(total characters)"},`class Trie {
  static class Node { Node[] next=new Node[26]; boolean word; }
  Node root=new Node();
  void insert(String s){Node n=root;for(char c:s.toCharArray()){
    int i=c-'a';if(n.next[i]==null)n.next[i]=new Node();n=n.next[i];}n.word=true;}
  boolean startsWith(String s){Node n=root;for(char c:s.toCharArray()){
    n=n.next[c-'a'];if(n==null)return false;}return true;}
}`,"Each edge is one character. Words with the same prefix reuse the same path, so lookup depends on word length, not number of words.",["Confusing prefix existence with whole-word existence","Large alphabets may favor HashMap children"],["Implement Trie","Design Add and Search Words","Word Search II"]),s("bit-manipulation","Bit Manipulation","Advanced","Interview","01","Use binary properties to encode, test, or cancel information.","Light switches stored inside one number.",["appears once","power of two","subset mask","parity"],["Translate the needed property into bits.","Use masks to isolate positions.","Remember x ^ x = 0 and x ^ 0 = x.","Check precedence with parentheses."],{best:"O(n)",average:"O(n)",worst:"O(n)",space:"O(1)"},`static int singleNumber(int[] a) {
  int answer=0;
  for(int x:a) answer ^= x;
  return answer;
}`,"XOR cancels equal pairs regardless of order. After every duplicated value cancels itself, only the unique number remains.",["Signed right shift differs from unsigned >>>","Operator precedence can hide bugs"],["Single Number","Counting Bits","Subsets via Bitmask"])],l=["Foundations","Core Patterns","Data Structures","Advanced"];var d=e.i(13431);e.s(["PatternExplorer",0,function(){let[e,r]=(0,i.useState)(""),[s,c]=(0,i.useState)("All"),h=(0,i.useMemo)(()=>o.filter(t=>{let r=[t.name,t.oneLiner,...t.triggers].join(" ").toLowerCase();return("All"===s||t.category===s)&&r.includes(e.toLowerCase())}),[e,s]);return(0,t.jsxs)("section",{id:"patterns",className:"mx-auto max-w-7xl px-5 pb-24 lg:px-8",children:[(0,t.jsx)("div",{className:"sticky top-16 z-30 -mx-2 mb-8 border-b border-border/60 bg-[#07100f]/92 px-2 py-4 backdrop-blur-xl",children:(0,t.jsxs)("div",{className:"flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",children:[(0,t.jsxs)("div",{className:"relative max-w-xl flex-1",children:[(0,t.jsx)(a,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground",size:18}),(0,t.jsx)("input",{value:e,onChange:e=>r(e.target.value),placeholder:"Search “substring”, “top K”, “sorted”…",className:"h-12 w-full rounded-xl border border-border bg-card/80 pl-11 pr-4 text-base outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"})]}),(0,t.jsx)("div",{className:"flex gap-2 overflow-x-auto pb-1",children:["All",...l].map(e=>(0,t.jsx)("button",{type:"button","aria-pressed":s===e,onClick:()=>c(e),className:`whitespace-nowrap rounded-lg border px-3.5 py-2 text-sm transition ${s===e?"border-primary bg-primary text-primary-foreground":"border-border bg-card text-muted-foreground hover:text-foreground"}`,children:e},e))})]})}),(0,t.jsx)("div",{className:"mb-5 flex items-end justify-between",children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-sm font-medium text-primary",children:[h.length," mental models"]}),(0,t.jsx)("h2",{className:"mt-1 text-2xl font-semibold tracking-tight",children:"Choose what the problem sounds like"})]})}),(0,t.jsxs)("p",{"aria-live":"polite",className:"sr-only",children:[h.length," patterns shown"]}),h.length?(0,t.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:h.map((e,r)=>(0,t.jsxs)("a",{href:(0,d.sitePath)(`/patterns/${e.slug}/`),style:{animationDelay:`${45*Math.min(r,8)}ms`},className:"group animate-rise rounded-2xl border border-border bg-card/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-card",children:[(0,t.jsxs)("div",{className:"mb-5 flex items-start justify-between",children:[(0,t.jsx)("span",{className:"grid size-11 place-items-center rounded-xl border border-border bg-secondary font-mono text-lg text-primary",children:e.icon}),(0,t.jsx)(n,{className:"text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary",size:19})]}),(0,t.jsxs)("div",{className:"mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[.12em] text-muted-foreground",children:[(0,t.jsx)("span",{children:e.category}),(0,t.jsx)("span",{children:"·"}),(0,t.jsx)("span",{children:e.level})]}),(0,t.jsx)("h3",{className:"text-xl font-semibold tracking-tight",children:e.name}),(0,t.jsx)("p",{className:"mt-2 leading-7 text-muted-foreground",children:e.oneLiner}),(0,t.jsx)("div",{className:"mt-5 flex flex-wrap gap-1.5",children:e.triggers.slice(0,3).map(e=>(0,t.jsx)("span",{className:"rounded-md bg-secondary px-2 py-1 text-xs text-[#b8c5c0]",children:e},e))})]},e.slug))}):(0,t.jsxs)("div",{className:"rounded-2xl border border-dashed border-border p-12 text-center",children:[(0,t.jsx)("p",{className:"text-lg font-medium",children:"No pattern matches that phrase."}),(0,t.jsx)("button",{type:"button",className:"mt-3 text-sm text-primary",onClick:()=>{r(""),c("All")},children:"Clear search"})]})]})}],46023)}]);