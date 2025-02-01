# ages ={ 15, 15, 16, 16, 16, 16, 16, 16, 15, 17, 17, 17, 17, 19, 21, 21, 23, 25, 25, 26, 32}

# average_age = sum(ages) / len(ages)

name_list = ["გიორგი", "ანა", "გიორგი", "მარიამი", "გიორგი"]
my_name = "გიორგი"

result = 0
for name in name_list:
    if name == my_name:
        result += 1

print(f"{my_name}{result} ")

name_list = ["გიორგი", "ანა", "გიორგი", "მარიამი", "გიორგი"]
my_name = "გიორგი"

count = name_list.count(my_name)

print(f"{my_name}{count}")


import random


random_numbers = [random.randint(1, 100) for _ in range(20)]
print( random_numbers)


even_numbers = [num for num in random_numbers if num % 2 == 0]
print( even_numbers)


for i in range(1, 11):
  
   
    if i % 2 != 0:
        print(i)

names = ["თამარი", "გიორგი", "ანა", "თეონა", "მარიამი"]
filtered_names = [name for name in names if not name.startswith('თ')]

print( filtered_names)