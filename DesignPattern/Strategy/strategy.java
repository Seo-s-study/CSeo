//제일 먼저 온 손님에게 10%를 할인해주고 마지막 손님은 20% 그리고 신선도가 떨어진 과일에 대해서는 20% 할인
public interface DiscountPolicy {
    double calculateWithDisCountRate(Item item);
}

public class FirstCustomerDiscount implements DiscountPolicy{
    @Override
    public double calculateWithDisCountRate(Item item) {
        return item.getPrice() * 0.9;
    }
}

public class LastCustomerDiscount implements DiscountPolicy{
    @Override
    public double calculateWithDisCountRate(Item item) {
        return item.getPrice() * 0.8;
    }
}

public class UnFreshFruitDiscount implements DiscountPolicy{
    @Override
    public double calculateWithDisCountRate(Item item) {
        return item.getPrice() * 0.8;
    }
}

public class Calculator {

    private final DiscountPolicy discountPolicy;

    public Calculator(DiscountPolicy discountPolicy) {
        this.discountPolicy = discountPolicy;
    }

    public double calculate(List<Item> items) {
        double sum = 0;
        for (Item item : items) {
            sum += discountPolicy.calculateWithDisCountRate(item);
        }
        return sum;
    }
}

public class FruitController {
    public static void main(String[] args) {
        Calculator calculator = new Calculator(new FirstCustomerDiscount());
        calculator.calculate(Arrays.asList(
            new Item("Apple", 3000),
            new Item("Banana", 3000),
            new Item("Orange", 2000),
            new Item("Pitch", 4000)
        ));
    }
}