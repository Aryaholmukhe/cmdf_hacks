function fifty_thirty_twenty(income, needs, wants, savings) {
    let allocated_needs = 0.5 * income;
    let allocated_wants = 0.3 * income;
    let allocated_savings = 0.2 * income;
  
    let extra_needs = allocated_needs - needs;
    let extra_wants = allocated_wants - wants;
  
    if (extra_needs < 0) {
      extra_needs = 0;
    } else if (extra_wants < 0) {
      extra_wants = 0;
  
    let total_savings = extra_needs + extra_wants + allocated_savings + (0.1*income);
    return total_savings;
  }
}