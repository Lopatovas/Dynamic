const a = (arr, n) => {
    let jumps = [];
    let path = [];
	if(n == 0 || arr[0] <= 0){
		return false;
	}
	jumps[0] = 0;
	for(let i = 1; i < n; i++){
		jumps[i] = 9999999;
		for(let j = 0; j < i; j++){
			if (i <= j + arr[j] && jumps[j] != 9999999 ){
			    jumps[i] = Math.min(jumps[i], jumps[j] + 1);
		        break;
            }
        }
    }
    console.log('path', path);
    console.log('jumps', jumps);
	return jumps[n - 1];
}

export default a;