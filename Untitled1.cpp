#include <stdio.h>

int main() {
    int num, reverse = 0, remainder;

    // Taking input from the user
    printf("Enter a number: ");
    scanf("%d", &num);

    // Loop to reverse the number
    while (num != 0) {
        remainder = num % 10;  // Get the last digit
        reverse = reverse * 10 + remainder;  // Build the reversed number
        num /= 10;  // Remove the last digit from the original number
    }

    // Displaying the reversed number
    printf("Reversed number: %d\n", reverse);

    return 0;
}

