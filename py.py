# import numpy as np
# # import time
# # # //List  Vs Numpy
# # # list_arr = [1,2,3,4]
# # # Numpu_arr = np.array([1,2,3] )
# # # time and Numpy
# # # start = time.time()
# # # py_list =[i*2 for i in range(1000000)]
# # # print("/n" , time.time() -start)
# # # start = time.time()
# # # py_arr =np.arange(1000000)*2
# # # print("py_arr" , time.time() - start)


# # # Create array  from scratch

# # # zero = np.zeros((3,4))
# # # print( zero)

# # # ones = np.ones((2,4))
# # # print("ones array" , ones)

# # # full = np.full((2,2),9)
# # # print("full are ", full)

# # # random = np.random.random((2,4))
# # # print(random)

# # sequence = np.arange(2,10,2)
# # print( "sequence" ,sequence)

# # tensor = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
# # print(tensor)


# #Array Properties 

# # import numpy as np
# # a = np.array([[1, 2, 3], [4, 5, 6]])

# # print(a.ndim)     # 2
# # print(a.shape)    # (2, 3)
# # print(a.size)     # 6
# # print(a.dtype)    # int64 (or int32 depending on system)
# # print(a.itemsize) # 8 (if int64)
# # print(a.nbytes)   # 48 (6 * 8)
# # print(a.T)        # Transposed matrix


# # #Array Reshaping 
# # import numpy as np

# # a = np.array([1, 2, 3, 4, 5, 6])
# # b = a.reshape(2, 3)  # From 1D → 2D (2 rows, 3 columns)

# # print(b)
# # change = b.reshape(-1)
# # print(change)
# # Output:
# # [[1 2 3]
# #  [4 5 6]]

# # Transpose 

# a = np.array([[1, 2], [3, 4], [5, 6]])
# print("Original:\n", a)
# # Transpose
# t = a.T
# print("Transposed:\n", t)

