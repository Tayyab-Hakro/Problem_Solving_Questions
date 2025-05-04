import numpy as np

# # # Numpy Operations and  mathematics 
# # a = np.array([1, 2, 3])
# # b = np.array([4, 5, 6])

# # print(a + b)     # [5 7 9]
# # print(a - a)     # [-3 -3 -3]
# # a * b     # [4 10 18]
# # a / b     # [0.25 0.4 0.5]
# # a ** 2    # [1 4 9]  (power)

# # Aggregate Functions
# # a = np.array([[1, 2], [3, 4]])

# # np.sum(a)        # 10
# # np.mean(a)       # 2.5
# # np.min(a)        # 1
# # np.max(a)        # 4
# # np.std(a)        # Standard deviation
# # np.var(a)        # Variance

# #  3. Matrix Operations

# # a = np.array([1,2,3])
# # b = np.array([4,5,6])

# # print(np.dot(a ,b))
# # print(a.T)

# # Array Slice
# # a = np.arange(10) One d array
# # print(a[2:5])
# # print(a[-3])
# # print(a[2:8:2])

# #array Slice on 2array
# # d2_arr = np.array([[1,2,3],[4,5,6]])
# # print(d2_arr[:,2])ENTIRE rouw and column 
# # print(d2_arr[1,2]) row index

# ##Array Sort
# # Sort_ARR = np.array([10,3,5 ,1,2,3,4,5])
# # print(np.sort(Sort_ARR))


# b = np.array([[3, 2, 1],
#               [6, 5, 4]])

# np.sort(b, axis=0)  # Column-wise sort
# # [[3 2 1]
# #  [6 5 4]]

# np.sort(b, axis=1)  # Row-wise sort
# # [[1 2 3]
# #  [4 5 6]]

# ## Filtering in Numpy
# import numpy as np

# arr = np.array([10, 20, 30, 40, 50])

# # Filter condition: elements greater than 25
# filter_condition = arr == 30

# # Apply filter
# filtered_arr = arr[filter_condition]

# print(filtered_arr)  # Output: [30 40 50]

# arr = np.array([1, 2, 3])
# new_arr = np.append(arr, [4, 5])
# print(new_arr)  # Output: [1 2 3 4 5]
# arr2 = np.array([4,5,6])
# new_arr2 = np.append(arr2 ,[49,30])
# remove_arr = np.delete(new_arr2,3)
# print(remove_arr)