# New list of numbers provided by the user
additional_numbers = [
    1.19, 0.29, 9.32, 2.34, 1.10, 8.56, 5.32,
    2.34, 1.10, 2.56, 6.24, 4.79, 5.92, 2.56,
    6.24, 4.76, 5.92, 3.56, 0.22, 1.32, 2.51,
    6.99, 4.87, 5.04, 3.17, 5.12, 3.38, 5.04,
    3.17, 5.12, 3.38, 3.47, 0.92, 7.18, 3.15,
    1.39, 1.18, 2.06, 11.98, 4.32, 5.88,
    3.12, 3.47, 0.92, 7.18, 3.15, 1.39, 1.18,
    2.06
]

# Create a DataFrame for the additional numbers
df_additional = pd.DataFrame(additional_numbers, columns=["A"])

# Save the new numbers to an Excel file
file_path_additional = ("у.xlsx")
df_additional.to_excel(file_path_additional, index=False)

file_path_additional
