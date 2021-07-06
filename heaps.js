

//export { BinaryHeap }

export class BinaryHeap {...}



class BinaryHeap 
{

		constructor()
		{
				this.arr = [];
		}

		empty()
		{
				return (this.arr.length == 0);
		}

		heapify(index)
		{
				let idx = index,L_idx = -1,R_idx = -1;

				if(2 * idx + 1 < this.arr.length && this.arr[2 * idx + 1][0] < this.arr[idx][0])
					L_idx = 2 * idx + 1;

				if(2 * idx + 2  < this.arr.length && this.arr[2 * idx + 2][0] < this.arr[idx][0])
					R_idx = 2 * idx + 2;

				let swap_idx = -1,swap_val = -1;

				if(L_idx != -1)
				{
						swap_val = this.arr[L_idx][0];
						swap_idx = L_idx;
				}

				if(R_idx != -1)
				{
						if(swap_val > this.arr[R_idx][0])
						{
								swap_val = this.arr[R_idx][0];
								swap_idx = R_idx;
						}
				}

				if(swap_idx != -1)
				{
						let temp = this.arr[idx];
						this.arr[idx] = this.arr[swap_idx];
						this.arr[swap_idx] = temp;

						this.heapify(swap_idx);
				}

		}

		pop()
		{
				if(this.arr.length == 0)
				{
						console.log("Heap is empty. Cannot perform pop operation");
						return;
				}

				let idx = this.arr.length-1;

				let ans = this.arr[0];

				let temp = this.arr[0];
				this.arr[0] = this.arr[idx];
				this.arr[idx] = temp;

				this.arr.pop();

				if(this.arr.length)
					this.heapify(0);

				return ans;

		}

		push(val)
		{
				this.arr.push(val);
				let idx = this.arr.length-1;
				let par = Math.floor((idx-1)/2);

				while(idx > 0)
				{
						if(this.arr[idx][0] > this.arr[par][0])
						 break;

						let temp = this.arr[idx];
						this.arr[idx] = this.arr[par];
						this.arr[par] = temp;

						idx = par;
						par = Math.floor((par-1)/2);
				}
		}




}
